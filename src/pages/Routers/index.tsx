import { H1 } from "@/components/custom/H1";
import { Table } from "@/components/custom/Table";
import PageLayout1 from "@/components/layouts/pageLayout1";

// import { columns, type Payment, DataTable } from "../../components/custom/DataTable";
// // import { DataTable } from "./data-table"

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     {
//       id: "722ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     {
//       id: "725ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     // ...
//   ]
// }

// export default async function DemoPage() {

//   return (
//     <div className="container mx-auto py-10">
//     </div>
//   )
// }









const Routers = () => {
  //   const data = await getData()

  return (
    <div>
      <PageLayout1 title={<H1>Routers Management</H1>} content={<Table />} />
      {/* <Table /> */}
    </div>
  );
}

export default Routers;