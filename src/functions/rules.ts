export default {
    required: (value: string) => !!value || 'Este campo é obrigatório',
    email: (value: string) => /.+@.+\..+/.test(value) || 'E-mail inválido',
    min: (length: number) => (value: string) => value.length >= length || `Minimo ${length} caracteres`,
    matchPassword<T extends Record<string,any>>(form:T, kPass: keyof T, kConfirmPass: keyof T){
        return () => form[kPass] === form[kConfirmPass] || 'As senhas não conferem'
    }
}