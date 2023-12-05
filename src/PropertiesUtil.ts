import { loadEnv} from "vite";

export class PropertiesUtil {


    static load<T extends Properties>(env: any) {
        return loadEnv(env.mode, process.cwd()) as unknown as T;
    }
}

export interface Properties {

}

export interface VueWebProjectProperties{

    /** 项目基本地址 */
    readonly VITE_BASE_URL: string;
}
