import { H1 } from "@/components/custom/H1";
import { Table } from "@/components/custom/Table";
import PageLayout1 from "@/components/layouts/pageLayout1";

const Dashboard = () => {
    return (
        <div>
      <PageLayout1 title={<H1>Dashboard</H1>} content={<Table />} />
      {/* <Table /> */}
    </div>
    );
}

export default Dashboard;