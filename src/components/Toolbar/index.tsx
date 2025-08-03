import { LanguageSwitcher } from "./LanguageSwitch";
import { Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeSwitch from "../custom/ThemeSwitch";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export const Toolbar = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="flex items-center justify-between pl-10 pr-2 h-14 border-b">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <img
                    src="/logo.svg"
                    alt="Logo"
                    className="h-8 w-8"
                />
                <span className="font-semibold">{t('app.title')}</span>
            </div>

            {/* Right side: Toggle and User */}
            <div className="flex items-center space-x-4">
                <ThemeSwitch />
                <LanguageSwitcher />
                {/* <button
                    className="p-2 rounded hover:bg-gray-200"
                    onClick={() => navigate("/settings")}
                    title={t('app.navigation.settings')}
                >
                    <Settings />
                </button> */}




                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="flex items-center space-x-2 cursor-pointer">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                


            </div>
        </div>
    );
}