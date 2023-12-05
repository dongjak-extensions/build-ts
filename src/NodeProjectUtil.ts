import path from "path";

export class NodeProjectUtil {

    /**
     * 获取项目根路径
     * @descrition 末尾不带斜杠
     */
    static getRootPath() {
        return path.resolve(process.cwd());
    }

    /**
     * 获取项目src路径
     * @param srcName - src目录名称(默认: "src")
     * @descrition 末尾不带斜杠
     */
    static getSrcPath(srcName = 'src') {
        const rootPath = NodeProjectUtil.getRootPath();

        return `${rootPath}/${srcName}`;
    }

}
