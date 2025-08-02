import { H1 } from "@/components/custom/H1";
import { Table } from "@/components/custom/Table";
import PageLayout1 from "@/components/layouts/pageLayout1";

const Policies = () => {
    return (
        <div>
      <PageLayout1 title={<H1>Policy Management</H1>} content={<Table />} />
      {/* <Table /> */}
    </div>
    );
}

export default Policies;