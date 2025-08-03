import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage, type Languages } from '../../redux/slices/appPreferences';
import { type RootState } from '../../redux';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state: RootState) => state.appPreferences.currentLanguage);

  const handleLanguageChange = (language: Languages) => {
    dispatch(setLanguage(language));
    i18n.changeLanguage(language);
  };

  return (
    <Select onValueChange={(value: Languages) => handleLanguageChange(value)} value={currentLanguage}>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="fr">Français</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}