import {ref} from "vue";

interface RegisterUser {
    username: string;
    email: string;
    password: string;
}

export const registerUser = ref<RegisterUser>({
    username: "",
    email: "",
    password: "",
});

interface RegisterRules {
    username: ({
        message: string;
        required: boolean;
        trigger: string;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
    })[];
    email: {
        type: string;
        message: string;
        required: boolean;
        trigger: string;
    }[];
    password: ({
        required: boolean;
        message: string;
        trigger: string;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
    })[];
}


export const registerRules = ref<RegisterRules>({
    username: [
        {
            message: "用户名不能为空...",
            required: true,
            trigger: "blur",
        },
        {
            min: 2,
            max: 30,
            message: "长度在2到30个字符",
            trigger: "blur",
        },
    ],
    email: [
        {
            type: "email",
            message: "Email is incorrect...",
            required: true,
            trigger: "blur",
        },
    ],
    password: [
        {
            required: true,
            message: "Password could not be empty...",
            trigger: "blur",
        },
        {
            min: 6,
            max: 30,
            message: "Password's length has to be 6 to 30 characters...",
            trigger: "blur",
        },
    ]

});