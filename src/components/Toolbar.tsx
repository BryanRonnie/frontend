import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LanguageSwitcher } from "./LanguageSwitch";
import { Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeSwitch from "./custom/ThemeSwitch";

export const Toolbar = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="flex items-center justify-between px-10 h-14 border-b">
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
                {/* <SidebarTrigger /> */}

                <ThemeSwitch />


                <LanguageSwitcher />



                <button
                    className="p-2 rounded hover:bg-gray-200"
                    onClick={() => navigate("/settings")}
                    title={t('app.navigation.settings')}
                >
                    <Settings />
                </button>
                {/* <button className="p-2 rounded hover:bg-gray-200"
                    onClick={() => navigate("/settings")}
                    title={t('app.navigation.settings')}
                > */}
                    <div className="flex items-center space-x-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        {/* <div className="text-sm font-medium">John Doe</div> */}
                    </div>
                {/* </button> */}
            </div>
        </div>
    );
}