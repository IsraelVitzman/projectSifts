import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
    constructor(private AuthService: AuthService) { }

    @Post('/login')
    login(@Body() body: any) {
        return this.AuthService.login(body);
    }
    @Post('/register')
    register(@Body() body: any) {
        return this.AuthService.register(body);
    }

}
