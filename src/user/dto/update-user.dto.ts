import { IsEnum } from "class-validator";
import { UserStatus } from "../user-status.enum";

export class UpdateUserDto{
    @IsEnum(UserStatus)
    status: UserStatus;
}