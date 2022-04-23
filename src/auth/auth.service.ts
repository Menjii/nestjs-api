import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}
    signup() {
        return 'signed up'
    }

    signin() {
        return 'signed in'
    }

}