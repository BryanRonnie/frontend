import { H1 } from "@/components/custom/H1";
import { Table } from "@/components/custom/Table";
import PageLayout1 from "@/components/layouts/pageLayout1";
import { t } from "i18next";

const Policies = () => {
    return (
        <div>
      <PageLayout1 title={<H1>{t('app.policies.policiesManagement')}</H1>} content={<Table />} />
    </div>
    );
}

export default Policies;