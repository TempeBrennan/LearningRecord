module HanXing {

    //#region Get Offset Path
    function getLineOffsetPath(start: IPoint, end: IPoint, offset: number, parallelType: ParallelType): IParallelPath {
        let rate = getLineSlope(start, end);
        let offsetX = getParallelLineOffsetX(offset, rate);
        let offsetY = getParallelLineOffsetY(offset, rate);

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

    function getArcOffsetPath(ellipseInfo: EllipseInfo, offset: number, parallelType: ParallelType): IParallelPath {
        let a = getEllipseMajorAxis(ellipseInfo, offset, parallelType),
            b = getEllipseMinorAxis(ellipseInfo, offset, parallelType);

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
    function getLineEquationInfo(p1: IPoint, p2: IPoint): ILineEquationInfo {
        let x1 = p1.x, y1 = p1.y, x2 = p2.x, y2 = p2.y;

        return {
            factorA: y2 - y1,
            factorB: x1 - x2,
            factorC: x2 * y1 - x1 * y2
        };
    }

    function getLineIntersect(line1: ILineEquationInfo, line2: ILineEquationInfo): IPoint {
        let a1 = line1.factorA, b1 = line1.factorB, c1 = line1.factorC;
        let a2 = line2.factorA, b2 = line2.factorB, c2 = line2.factorC;

        return {
            x: (c2 * b1 - c1 * b2) / (a1 * b2 - a2 * b1),
            y: (c1 * a2 - c2 * a1) / (a1 * b2 - a2 * b1)
        };
    }

    function getLineSlope(p1: IPoint, p2: IPoint): number {
        return -Math.atan2(p2.y - p1.y, p2.x - p1.x);
    }

    function getParallelLineOffsetX(offset: number, lineRate: number): number {
        return offset * Math.sin(lineRate);
    }

    function getParallelLineOffsetY(offset: number, linerRate: number): number {
        return offset * Math.cos(linerRate);
    }

    function getDistance(p1: IPoint, p2: IPoint): number {
        return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    }

    function getNearestIntersect(p: IPoint, p1: IPoint, p2: IPoint): IPoint {
        let dis1 = getDistance(p, p1);
        let dis2 = getDistance(p, p2);
        if (dis1 < dis2) {
            return p1;
        } else {
            return p2;
        }
    }
    //#endregion

    //#region Arc Info
    export function getLineArcIntersect(path: IParallelPath, ellipseInfo: EllipseInfo, pt: IPoint): IPoint {
        let centerX = ellipseInfo.center.x, centerY = ellipseInfo.center.y;
        let x1 = path.startPoint.x - centerX,
            /**move to ellipse center and change vertical direction */
            y1 = -(path.startPoint.y - centerY),
            x2 = path.endPoint.x - centerX,
            /**move to ellipse center and change vertical direction */
            y2 = -(path.endPoint.y - centerY);
        let a = ellipseInfo.a, b = ellipseInfo.b;

        let p1 = Math.pow(x2 - x1, 2) / Math.pow(a, 2) + Math.pow(y2 - y1, 2) / Math.pow(b, 2);
        let p2 = (2 * x1 * (x2 - x1)) / Math.pow(a, 2) + (2 * y1 * (y2 - y1)) / Math.pow(b, 2);
        let p3 = Math.pow(x1, 2) / Math.pow(a, 2) + Math.pow(y1, 2) / Math.pow(b, 2) - 1;

        let t1 = (-p2 + Math.sqrt(Math.pow(p2, 2) - 4 * p1 * p3)) / (2 * p1);
        let t2 = (-p2 - Math.sqrt(Math.pow(p2, 2) - 4 * p1 * p3)) / (2 * p1);

        let pt1: IPoint = {
            x: x1 + (x2 - x1) * t1 + centerX,
            /**change direction and move back*/
            y: -(y1 + (y2 - y1) * t1) + centerY
        };
        let pt2: IPoint = {
            x: x1 + (x2 - x1) * t2 + centerX,
            /**change direction and move back*/
            y: -(y1 + (y2 - y1) * t2) + centerY
        };
        return getNearestIntersect(pt, pt1, pt2);
    }

    function getEllipseMajorAxis(ellipseInfo: EllipseInfo, offset: number, parallelType: ParallelType): number {
        if (parallelType === ParallelType.higher) {
            return ellipseInfo.clockwise ? ellipseInfo.a + offset : ellipseInfo.a - offset;
        } else {
            return ellipseInfo.clockwise ? ellipseInfo.a - offset : ellipseInfo.a + offset;
        };
    }

    function getEllipseMinorAxis(ellipseInfo: EllipseInfo, offset: number, parallelType: ParallelType): number {
        if (parallelType === ParallelType.higher) {
            return ellipseInfo.clockwise ? ellipseInfo.b + offset : ellipseInfo.b - offset;
        } else {
            return ellipseInfo.clockwise ? ellipseInfo.b - offset : ellipseInfo.b + offset;
        };
    }
    //#endregion

    //#region Main
    function getParallelAllPoints(points: Array<IPoint>, offset: number, parallelType: ParallelType): Array<IPoint> {
        let result: Array<IPoint> = [];
        let allPoints: Array<IPoint> = [];

        let len = allPoints.length;
        let pointRepeat = false;
        for (let i = 0; i < len - 1; i++) {
            let cur = allPoints[i];
            let next = allPoints[i + 1];
            if (cur.x === next.x && cur.y === next.y) {
                pointRepeat = true;
                continue;
            }
            let curParallelLine = getLineOffsetPath(cur, next, offset, parallelType);

            if (i === 0) {
                result.push(curParallelLine.startPoint);
            }

            if (len === 2) {
                result.push(curParallelLine.endPoint);
                break;
            }

            if (i === len - 2) {
                if (allPoints[0].x === allPoints[len - 1].x && allPoints[0].y === allPoints[len - 1].y) {
                    let nextParallelLine = getLineOffsetPath(allPoints[0], allPoints[1], offset, parallelType);
                    let curLineInfo = getLineEquationInfo(curParallelLine.startPoint, curParallelLine.endPoint);
                    let nextLineInfo = getLineEquationInfo(nextParallelLine.startPoint, nextParallelLine.endPoint);
                    let intersectPoint = getLineIntersect(curLineInfo, nextLineInfo);
                    result.push(intersectPoint);
                    result[0] = intersectPoint;
                    break;
                } else {
                    result.push(curParallelLine.endPoint);
                    break;
                }
            }

            if (i === len - 1) {
                break;
            }

            let nextParallelLine = getLineOffsetPath(next, allPoints[i + 2], offset, parallelType);
            let curLineInfo = getLineEquationInfo(curParallelLine.startPoint, curParallelLine.endPoint);
            let nextLineInfo = getLineEquationInfo(nextParallelLine.startPoint, nextParallelLine.endPoint);
            let intersectPoint = getLineIntersect(curLineInfo, nextLineInfo);
            result.push(intersectPoint);
            if (pointRepeat) {
                result.push(intersectPoint);
                pointRepeat = false;
            }
        }

        return result;
    }

    export function getParallelPathPoints(pointInfos: Array<PointInfo>, offset: number, parallelType: ParallelType): Array<IPoint> {
        let result: Array<IPoint> = [];
        let len = pointInfos.length;
        if (len < 2) {
            return result;
        }

        let isClosed = isPathClosed(pointInfos[0], pointInfos[len - 1]);
        for (let i = 1; i < len; i++) {
            let previous = pointInfos[i - 1];
            let cur = pointInfos[i];

            let parallel: IParallelPath;
            if (cur.type === PointType.lineTo) {
                parallel = getLineOffsetPath(previous.point as IPoint, cur.point as IPoint, offset, parallelType);
            } else {
                let acrInfo = cur.point as EllipseInfo;
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
                } else {
                    result.push(parallel.endPoint);
                }
                break;
            } else {
                let next = pointInfos[i + 1];
                let pt = getEndPoint(parallel.startPoint, parallel.endPoint, cur, next, offset, parallelType);
                result.push(pt);
                flatternEllipse(cur);
            }
        }
        return result;
    }

    function isPathClosed(start: PointInfo, cur: PointInfo): boolean {
        if (start.type === PointType.lineTo && cur.type === PointType.lineTo) {
            return isPointEqual(start.point as IPoint, cur.point as IPoint);
        }
        return false;
    }

    function flatternEllipse(pointInfo: PointInfo): void {
        if (pointInfo.type === PointType.ArcTo) {
            pointInfo.type = PointType.lineTo;
            pointInfo.point = getArcOffsetPath(pointInfo.point as EllipseInfo, 0, ParallelType.higher).endPoint;
        }
    }

    function getClosedPathStart(curPath: IParallelPath, startPath: IParallelPath): IPoint {
        let curLineInfo = getLineEquationInfo(curPath.startPoint, curPath.endPoint);
        let nextLineInfo = getLineEquationInfo(startPath.startPoint, startPath.endPoint);
        return getLineIntersect(curLineInfo, nextLineInfo);
    }

    function isPointEqual(pt1: IPoint, pt2: IPoint): boolean {
        return pt1.x === pt2.x && pt1.y === pt2.y;
    }

    function getEndPoint(startPoint: IPoint, endPoint: IPoint, cur: PointInfo, next: PointInfo, offset: number, parallelType: ParallelType): IPoint {
        if (cur.type === PointType.lineTo && next.type === PointType.ArcTo) {
            let ellipseInfo = clone(next.point as EllipseInfo);
            ellipseInfo.a = getEllipseMajorAxis(next.point as EllipseInfo, offset, parallelType);
            ellipseInfo.b = getEllipseMinorAxis(next.point as EllipseInfo, offset, parallelType);

            return getLineArcIntersect(
                {
                    startPoint: startPoint,
                    endPoint: endPoint
                },
                ellipseInfo,
                endPoint);
        } else if (cur.type === PointType.lineTo && next.type === PointType.lineTo) {

            let nextLine = getLineOffsetPath(cur.point as IPoint, next.point as IPoint, offset, parallelType);
            let curLineInfo = getLineEquationInfo(startPoint, endPoint);
            let nextLineInfo = getLineEquationInfo(nextLine.startPoint, nextLine.endPoint);

            return getLineIntersect(curLineInfo, nextLineInfo);
        } else if (cur.type === PointType.ArcTo && next.type === PointType.lineTo) {

            let nextLine = getLineOffsetPath(endPoint, next.point as IPoint, offset, parallelType);
            let ellipseInfo = clone(cur.point as EllipseInfo);
            ellipseInfo.a = getEllipseMajorAxis(cur.point as EllipseInfo, offset, parallelType);
            ellipseInfo.b = getEllipseMinorAxis(cur.point as EllipseInfo, offset, parallelType);

            return getLineArcIntersect(
                {
                    startPoint: nextLine.startPoint,
                    endPoint: nextLine.endPoint
                },
                ellipseInfo,
                endPoint);
        } else {
            return endPoint;
        }
    }

    function clone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    //#endregion


    //#region interface

    // Ax + By + C = 0
    export interface ILineEquationInfo {
        factorA: number;
        factorB: number;
        factorC: number;
    }

    // x^2/a^2 + y^2/b^2 = 1 (startAngle ~ endAngle)
    export interface EllipseInfo {
        center: IPoint;
        a: number;
        b: number;
        startAngle: number;
        endAngle: number;
        clockwise: boolean;
    }

    export interface IParallelPath {
        startPoint: IPoint;
        endPoint: IPoint;
    }

    export enum ParallelType {
        higher,
        lower
    }

    export enum PointType {
        lineTo,
        ArcTo
    }

    export interface PointInfo {
        type: PointType;
        point: IPoint | EllipseInfo;
    }

    export interface IPoint {
        x: number;
        y: number;
    }
    //#endregion

}