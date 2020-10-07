import { FormGroup, FormControl, Validators } from "@angular/forms";

export function addControltoFormGroup(form: FormGroup, control: FormControl, name: string) {
    form.addControl(name, control);
}

/**
 * Email format verification
 *
 * @example
 * RegExp(EMAIL_REGEX).test(user@gmail.com)
 */
export const EMAIL_REGEX = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';

/**
 * Verify if contains at least one upper & lowercase letter
 *
 * @example
 * RegExp(HAS_UPPER_LOWER_CASE).test(Onepassword)
 */
export const HAS_UPPER_LOWERCASE = /([A-Z].*[a-z]|[a-z].*[A-Z])/;

/**
 * Verify if contains at least one number
 *
 * @example
 * RegExp(HAS_NUMBER).test(atLeast1Number)
 */
export const HAS_NUMBER = '\\d';

/**
 * Verify if contains one special character
 *
 * @example
 * RegExp(HAS_SPECIAL_CHARACTER).test($#!)
 */
export const HAS_SPECIAL_CHARACTER = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;