export interface Map {
    serial_no: string;
    map_name: string;
    area: string;
    locality: string;
    map_type: string;
    lr_no?: string;
    fr_no?: string;
    sheet_no?: string;
}

export interface User {
    id: string;
    first_name: string;
    last_name: string;
    email_address: string;
    password: string;
}
