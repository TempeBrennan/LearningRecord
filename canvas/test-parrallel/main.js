"use strict";
var HanXing;
(function (HanXing) {
    //#region Get Offset Path
    function getLineOffsetPath(start, end, offset, parallelType) {
        var rate = getLineSlope(start, end);
        var offsetX = getParallelLineOffsetX(offset, rate);
        var offsetY = getParallelLineOffsetY(offset, rate);
        return {
            startPoint: {
                x: parallelType === ParallelType.higher ? start.x - offsetX : start.x + offsetX,
                y: parallelType === ParallelType.higher ? start.y - offsetY : start.y + offsetY
            },
            endPoint: {
                x: parallelType === ParallelType.higher ? end.x - offsetX : end.x + offsetX,
                y: parallelType === ParallelType.higher ? end.y - offsetY : end.y + offsetY
            }
        };
    }
    function getArcOffsetPath(ellipseInfo, offset, parallelType) {
        var a = getEllipseMajorAxis(ellipseInfo, offset, parallelType), b = getEllipseMinorAxis(ellipseInfo, offset, parallelType);
        return {
            startPoint: {
                x: a * Math.cos(ellipseInfo.startAngle) + ellipseInfo.center.x,
                y: b * Math.sin(ellipseInfo.startAngle) + ellipseInfo.center.y
            },
            endPoint: {
                x: a * Math.cos(ellipseInfo.endAngle) + ellipseInfo.center.x,
                y: b * Math.sin(ellipseInfo.endAngle) + ellipseInfo.center.y
            }
        };
    }
    //#endregion
    //#region Straight Line
    function getLineEquationInfo(p1, p2) {
        var x1 = p1.x, y1 = p1.y, x2 = p2.x, y2 = p2.y;
        return {
            factorA: y2 - y1,
            factorB: x1 - x2,
            factorC: x2 * y1 - x1 * y2
        };
    }
    function getLineIntersect(line1, line2) {
        var a1 = line1.factorA, b1 = line1.factorB, c1 = line1.factorC;
        var a2 = line2.factorA, b2 = line2.factorB, c2 = line2.factorC;
        return {
            x: (c2 * b1 - c1 * b2) / (a1 * b2 - a2 * b1),
            y: (c1 * a2 - c2 * a1) / (a1 * b2 - a2 * b1)
        };
    }
    function getLineSlope(p1, p2) {
        return -Math.atan2(p2.y - p1.y, p2.x - p1.x);
    }
    function getParallelLineOffsetX(offset, lineRate) {
        return offset * Math.sin(lineRate);
    }
    function getParallelLineOffsetY(offset, linerRate) {
        return offset * Math.cos(linerRate);
    }
    function getDistance(p1, p2) {
        return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    }
    function getNearestIntersect(p, p1, p2) {
        var dis1 = getDistance(p, p1);
        var dis2 = getDistance(p, p2);
        if (dis1 < dis2) {
            return p1;
        }
        else {
            return p2;
        }
    }
    //#endregion
    //#region Arc Info
    function getLineArcIntersect(path, ellipseInfo, pt) {
        var centerX = ellipseInfo.center.x, centerY = ellipseInfo.center.y;
        var x1 = path.startPoint.x - centerX, 
        /**move to ellipse center and change vertical direction */
        y1 = -(path.startPoint.y - centerY), x2 = path.endPoint.x - centerX, 
        /**move to ellipse center and change vertical direction */
        y2 = -(path.endPoint.y - centerY);
        var a = ellipseInfo.a, b = ellipseInfo.b;
        var p1 = Math.pow(x2 - x1, 2) / Math.pow(a, 2) + Math.pow(y2 - y1, 2) / Math.pow(b, 2);
        var p2 = (2 * x1 * (x2 - x1)) / Math.pow(a, 2) + (2 * y1 * (y2 - y1)) / Math.pow(b, 2);
        var p3 = Math.pow(x1, 2) / Math.pow(a, 2) + Math.pow(y1, 2) / Math.pow(b, 2) - 1;
        var t1 = (-p2 + Math.sqrt(Math.pow(p2, 2) - 4 * p1 * p3)) / (2 * p1);
        var t2 = (-p2 - Math.sqrt(Math.pow(p2, 2) - 4 * p1 * p3)) / (2 * p1);
        var pt1 = {
            x: x1 + (x2 - x1) * t1 + centerX,
            /**change direction and move back*/
            y: -(y1 + (y2 - y1) * t1) + centerY
        };
        var pt2 = {
            x: x1 + (x2 - x1) * t2 + centerX,
            /**change direction and move back*/
            y: -(y1 + (y2 - y1) * t2) + centerY
        };
        return getNearestIntersect(pt, pt1, pt2);
    }
    HanXing.getLineArcIntersect = getLineArcIntersect;
    function getEllipseMajorAxis(ellipseInfo, offset, parallelType) {
        if (parallelType === ParallelType.higher) {
            return ellipseInfo.clockwise ? ellipseInfo.a + offset : ellipseInfo.a - offset;
        }
        else {
            return ellipseInfo.clockwise ? ellipseInfo.a - offset : ellipseInfo.a + offset;
        }
        ;
    }
    function getEllipseMinorAxis(ellipseInfo, offset, parallelType) {
        if (parallelType === ParallelType.higher) {
            return ellipseInfo.clockwise ? ellipseInfo.b + offset : ellipseInfo.b - offset;
        }
        else {
            return ellipseInfo.clockwise ? ellipseInfo.b - offset : ellipseInfo.b + offset;
        }
        ;
    }
    function getArcInfo(ellipseInfo, startPoint, endPoint, offset, parallelType) {
        var a = getEllipseMajorAxis(ellipseInfo, offset, parallelType);
        return {
            startAngle: Math.acos((startPoint.x - ellipseInfo.center.x) / a),
            endAngle: -Math.acos((endPoint.x - ellipseInfo.center.x) / a)
        };
    }
    //#endregion
    //#region Main
    function getParallelPathPoints(pointInfos, offset, parallelType) {
        var result = [];
        var len = pointInfos.length;
        if (len < 2) {
            return result;
        }
        var isClosed = isPathClosed(pointInfos[0], pointInfos[len - 1]);
        for (var i = 1; i < len; i++) {
            var previous = pointInfos[i - 1];
            var cur = pointInfos[i];
            var parallel = void 0;
            if (cur.type === PointType.lineTo) {
                parallel = getLineOffsetPath(previous.point, cur.point, offset, parallelType);
            }
            else {
                var acrInfo = cur.point;
                parallel = getArcOffsetPath(acrInfo, offset, parallelType);
            }
            if (i === 1) {
                result.push(parallel.startPoint);
            }
            if (i === len - 1) {
                /**If close, need change startPoint */
                if (isClosed) {
                    result[0] = getClosedPathStart(parallel, {
                        startPoint: result[0],
                        endPoint: result[1]
                    });
                }
                else {
                    result.push(parallel.endPoint);
                }
                break;
            }
            else {
                var next = pointInfos[i + 1];
                var pt = getEndPoint(parallel.startPoint, parallel.endPoint, cur, next, offset, parallelType);
                if (cur.type === PointType.ArcTo) {
                    var arcInfo = getArcInfo(cur.point, result[result.length - 1], pt, offset, parallelType);
                    pt.startAngle = arcInfo.startAngle;
                    pt.endAngle = arcInfo.endAngle;
                }
                result.push(pt);
                flatternEllipse(cur);
            }
        }
        return result;
    }
    HanXing.getParallelPathPoints = getParallelPathPoints;
    function isPathClosed(start, cur) {
        if (start.type === PointType.lineTo && cur.type === PointType.lineTo) {
            return isPointEqual(start.point, cur.point);
        }
        return false;
    }
    function flatternEllipse(pointInfo) {
        if (pointInfo.type === PointType.ArcTo) {
            pointInfo.type = PointType.lineTo;
            pointInfo.point = getArcOffsetPath(pointInfo.point, 0, ParallelType.higher).endPoint;
        }
    }
    function getClosedPathStart(curPath, startPath) {
        var curLineInfo = getLineEquationInfo(curPath.startPoint, curPath.endPoint);
        var nextLineInfo = getLineEquationInfo(startPath.startPoint, startPath.endPoint);
        return getLineIntersect(curLineInfo, nextLineInfo);
    }
    function isPointEqual(pt1, pt2) {
        return pt1.x === pt2.x && pt1.y === pt2.y;
    }
    function getEndPoint(startPoint, endPoint, cur, next, offset, parallelType) {
        if (cur.type === PointType.lineTo && next.type === PointType.ArcTo) {
            var ellipseInfo = clone(next.point);
            ellipseInfo.a = getEllipseMajorAxis(next.point, offset, parallelType);
            ellipseInfo.b = getEllipseMinorAxis(next.point, offset, parallelType);
            return getLineArcIntersect({
                startPoint: startPoint,
                endPoint: endPoint
            }, ellipseInfo, endPoint);
        }
        else if (cur.type === PointType.lineTo && next.type === PointType.lineTo) {
            var nextLine = getLineOffsetPath(cur.point, next.point, offset, parallelType);
            var curLineInfo = getLineEquationInfo(startPoint, endPoint);
            var nextLineInfo = getLineEquationInfo(nextLine.startPoint, nextLine.endPoint);
            return getLineIntersect(curLineInfo, nextLineInfo);
        }
        else if (cur.type === PointType.ArcTo && next.type === PointType.lineTo) {
            var nextLine = getLineOffsetPath(endPoint, next.point, offset, parallelType);
            var ellipseInfo = clone(cur.point);
            ellipseInfo.a = getEllipseMajorAxis(cur.point, offset, parallelType);
            ellipseInfo.b = getEllipseMinorAxis(cur.point, offset, parallelType);
            return getLineArcIntersect({
                startPoint: nextLine.startPoint,
                endPoint: nextLine.endPoint
            }, ellipseInfo, endPoint);
        }
        else {
            return endPoint;
        }
    }
    function clone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    var ParallelType;
    (function (ParallelType) {
        ParallelType[ParallelType["higher"] = 0] = "higher";
        ParallelType[ParallelType["lower"] = 1] = "lower";
    })(ParallelType = HanXing.ParallelType || (HanXing.ParallelType = {}));
    var PointType;
    (function (PointType) {
        PointType[PointType["lineTo"] = 0] = "lineTo";
        PointType[PointType["ArcTo"] = 1] = "ArcTo";
    })(PointType = HanXing.PointType || (HanXing.PointType = {}));
    //#endregion
})(HanXing || (HanXing = {}));
