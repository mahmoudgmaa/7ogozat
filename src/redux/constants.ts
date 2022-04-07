export const COLORS = {};
export const dimensions = {};
export type TCheckupKeys = {
    [K in CheckupKeys]: any;
};
export enum CheckupKeys {
    USER_TOKEN = '@token',
    CLIENT_TOKEN = '@client',
    UID_TOKEN = '@uid',
}

export const ROUTES = {
    "businessAdmin": "/businessAdmin",
    "businessAdminDashboard": "Dashboard",
    "createBusiness": "business/Create",
    "businessDashboard": "Business/",
}
