import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class Guard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!roles) return true;

        const request = context.switchToHttp().getRequest();
        const user = request.user;
      
        
        console.log('User from JWT:', user);

        if (!user) return false;

        return roles.includes(user.role);
    }
}
