import { User, UserDto } from "./user";

export interface Documents {
    id?: number;
    title?: string;
    description?: string;
    file?: string;
    visibility?: string;
    owner?: UserDto;
    LocalDateTime?: string;
    usersHasAccess?: UserDto[];
}
export interface CreateDocumentdto {
    title?: string;
    description?: string;
    file?: string;
    visibility?: string;
    owner?: UserDto;
    LocalDateTime?: string;
    usersHasAccess?: number[];
}
export interface DocumentDto {
    id: number;
    title: string;
    description: string;
    file: string;
    type: string;
    date: string;
    visibility: string;
    ownerId: string;
    owner: UserDto;
    LocalDateTim: string;
    usersHasAccess: Array<UserDto>;
}


