/* user for firebase */
export interface User {
    uid: string;
    email: string | null;
    photoURL?: string | null;
    displayName?: string | null;
}