import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { Auth } from '@angular/fire/auth';

/**
 * Auth Guard: bảo vệ routes /home/* — chỉ cho phép user đã đăng nhập
 * (Firebase Auth hoặc Guest với localStorage).
 *
 * Logic:
 * 1. Firebase Auth user → cho phép
 * 2. Guest user (localStorage isGuest=true) → cho phép
 * 3. Chưa đăng nhập → redirect về /auth
 */
export const authGuard: CanActivateFn = () => {
    const auth = inject(Auth);
    const router = inject(Router);

    // Firebase authenticated user
    if (auth.currentUser) {
        return true;
    }

    // Guest user (localStorage-based) hoặc Firebase user chưa re-init
    const isGuest = localStorage.getItem('isGuest') === 'true';
    const isFirebaseUser = localStorage.getItem('isFirebaseUser') === 'true';
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if ((isGuest || isFirebaseUser) && isLoggedIn) {
        return true;
    }

    // Chưa đăng nhập → redirect
    return router.createUrlTree(['/auth']);
};
