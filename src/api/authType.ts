//验证码返回数据类型
export type CodeType={
    img:string,
    uuid:string
}

//登录请求数据类型
export type LoginParamsType = {
    code: string;
    password: string;
    username: string;
    uuid: string;
}

//菜单返回数据类型
export type MenuType = {
    alwaysShow: boolean;
    children: RequestChild[];
    component: string;
    hidden: boolean;
    meta: RequestMeta;
    name: string;
    path: string;
    redirect: string;
}

export type RequestChild = {
    alwaysShow?: boolean;
    children?: ChildChild[];
    component: string;
    hidden: boolean;
    meta: FluffyMeta;
    name: string;
    path: string;
    redirect?: string;
}

export type ChildChild = {
    component: string;
    hidden: boolean;
    meta: PurpleMeta;
    name: string;
    path: string;
}

export type PurpleMeta = {
    icon: string;
    noCache: boolean;
    title: string;
}

export type FluffyMeta = {
    icon: string;
    noCache: boolean;
    title: string;
}

export type RequestMeta = {
    icon: string;
    noCache: boolean;
    title: string;
}