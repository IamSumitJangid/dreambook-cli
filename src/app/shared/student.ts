import { MaxLengthValidator } from '@angular/forms';

export const Gender = ['Male', 'Female'];

export class Student {
    id: number;
    name: string;
    gender: string;
    mobileNumber: string;
    dateOfJoin: Date;
    isDeleted: boolean;
    isActive: boolean;
}