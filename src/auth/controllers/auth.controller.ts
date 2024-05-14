import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { SignInDto } from 'src/auth/dto/signin.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { ProfileResponse } from 'src/auth/models/profile.response';
import { AuthService } from 'src/auth/services/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: SignInDto) {
        return this.authService.signIn(signInDto.email, signInDto.password);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Req() req: Request): ProfileResponse {
        return req['user'];
    }
    
}
