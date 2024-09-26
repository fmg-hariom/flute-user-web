"use client";
import React, { useState } from "react";
import { Inter, Montserrat, Poppins, } from "next/font/google";
import Footer from "@/components/footer/footer";
import MainHeader from "@/components/headers/MainHeader";
import { Table, Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import DataTable, { createTheme, defaultThemes } from 'react-data-table-component';
import Link from "next/link";
import SortAlertBox from "@/components/ui/sortbox";
createTheme('solarized', {
  text: {
    primary: '#FFF',
    secondary: '#2aa198',
  },
  background: {
    default: '#242424',
  },
  context: {
    background: '#fff',
    text: '#FFFFFF',
  },
  divider: {
    default: '#242424',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
}, 'dark');
const montserrat = Montserrat({
  weight: ['400', '500', '600', '700',], // Specify the font weights you need
  subsets: ["latin"], // Include any subsets you need
  display: "swap", // Controls how the font is displayed while loading
});
const poppins = Poppins({
  weight: ['400', '500', '600', '700',], // Specify the font weights you need
  subsets: ["latin"], // Include any subsets you need
  display: "swap", // Controls how the font is displayed while loading
});
const inter = Inter({
  weight: ['400', '500', '600', '700',], // Specify the font weights you need
  subsets: ["latin"], // Include any subsets you need
  display: "swap", // Controls how the font is displayed while loading
});
// const AgGridReact = dynamic(() => import('ag-grid-react'), { ssr: false });
export default function Wallet() {
  const [rowData, setRowData] = useState([
    { TransactionId: "962296152", Type: "Private Call", DateTime: "08 Jan 2022, 02:12 PM", Service: "Shivani", Amount: "- ₹217.90" },
    { TransactionId: "962296132", Type: "Public Call", DateTime: "08 Jan 2022, 02:12 PM", Service: "Recharge", Amount: "- ₹209" },
    { TransactionId: "962296252", Type: "Public Call", DateTime: "08 Jan 2022, 02:12 PM", Service: "Shivani", Amount: "- ₹217.90" },
    { TransactionId: "962296152", Type: "Private Call", DateTime: "08 Jan 2022, 02:12 PM", Service: "Sonam", Amount: "- ₹217.90" },
    { TransactionId: "962296152", Type: "Private Call", DateTime: "08 Jan 2022, 02:12 PM", Service: "Sonam", Amount: "- ₹217.90" },
    { TransactionId: "962296152", Type: "Private Call", DateTime: "08 Jan 2022, 02:12 PM", Service: "Sonam", Amount: "- ₹217.90" },
    { TransactionId: "962296152", Type: "Private Call", DateTime: "08 Jan 2022, 02:12 PM", Service: "Sonam", Amount: "- ₹217.90" },
    { TransactionId: "962296152", Type: "Private Call", DateTime: "08 Jan 2022, 02:12 PM", Service: "Sonam", Amount: "- ₹217.90" },
    { TransactionId: "962296152", Type: "Private Call", DateTime: "08 Jan 2022, 02:12 PM", Service: "Sonam", Amount: "- ₹217.90" },
    { TransactionId: "962296152", Type: "Private Call", DateTime: "08 Jan 2022, 02:12 PM", Service: "Sonam", Amount: "- ₹217.90" },
    { TransactionId: "962296152", Type: "Private Call", DateTime: "08 Jan 2022, 02:12 PM", Service: "Sonam", Amount: "- ₹217.90" },
    { TransactionId: "962296152", Type: "Private Call", DateTime: "08 Jan 2022, 02:12 PM", Service: "Sonam", Amount: "- ₹217.90" },
    { TransactionId: "962296152", Type: "Private Call", DateTime: "08 Jan 2022, 02:12 PM", Service: "Sonam", Amount: "- ₹217.90" },
    { TransactionId: "962296152", Type: "Private Call", DateTime: "08 Jan 2022, 02:12 PM", Service: "Sonam", Amount: "- ₹217.90" },
    { TransactionId: "962296152", Type: "Private Call", DateTime: "08 Jan 2022, 02:12 PM", Service: "Sonam", Amount: "- ₹217.90" },
    { TransactionId: "962296152", Type: "Private Call", DateTime: "08 Jan 2022, 02:12 PM", Service: "Sonam", Amount: "- ₹217.90" },
    { TransactionId: "962296152", Type: "Private Call", DateTime: "08 Jan 2022, 02:12 PM", Service: "Sonam", Amount: "- ₹217.90" },
  ]);

  const [colDefs, setColDefs] = useState([
    { field: 'TransactionId' },
    { field: 'Type' },
    { field: 'DateTime' },
    { field: 'Service' },
    { field: 'Amount' },
  ]);
  const columns = [
    {
      name: 'Transaction Id',
      selector: (row: any) => row.TransactionId,
      sortable: false,
    },
    {
      name: 'Type',
      selector: (row: any) => row.Type,
      sortable: false,
    },
    {
      name: 'Date&Time',
      selector: (row: any) => row.DateTime,
      sortable: false,
    },
    {
      name: 'Service',
      selector: (row: any) => row.Service,
      sortable: false,
    },
    {
      name: 'Amount',
      selector: (row: any) => row.Amount,
      sortable: false,
    }
  ];

  const data = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
    },
  ]

  const customStyles = {
    header: {
      style: {
        minHeight: '56px',

      },
    },
    headRow: {
      style: {
        backgroundColor: "#ffffff",
        padding: '1rem',
        fontSize: '18px',
        color: '#121212',
        fontWeight: '600'
      },
    },
    headCells: {
      style: {
        backGroundColor: "#fff",
      },
    },
    rows: {
      style: {
        padding: '1rem',
        fontSize: '20px'
      },
    },
    pagination: {
      style: {
        backgroundColor: "#ffffff",
        color: "#121212",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.2rem',
      }
    }
  };
  return (
    <>
      <div className=" w-screen p-8 bg-black">

        {/* SortBox */}
        {/* <SortAlertBox/> */}
      </div>
      <div className="">
        <div className="w-screen h-[20%] py-10 flex justify-between items-center px-10 bg-[#242424] text-white">
          <h1 className={montserrat.className + " text-[2.6rem] font-bold"}>My Wallet</h1>

          {/* Wallet Icon */}
          <div className={poppins.className + " flex place-content-end space-x-2 text-[#10B9EA]"}>
            <div className="flex items-center">
              <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.1836 36.8001H10.8156C6.83161 36.8001 3.59961 33.5681 3.59961 29.5841V18.8161C3.59961 14.8321 6.83161 11.6001 10.8156 11.6001H29.1836C33.1676 11.6001 36.3996 14.8321 36.3996 18.8161V21.1201C36.3996 21.7761 35.8556 22.3201 35.1996 22.3201H31.9676C31.4076 22.3201 30.8956 22.5281 30.5276 22.9121L30.5116 22.9281C30.0636 23.3601 29.8556 23.9521 29.9036 24.5601C29.9996 25.6161 31.0076 26.4641 32.1596 26.4641H35.1996C35.8556 26.4641 36.3996 27.0081 36.3996 27.6641V29.5681C36.3996 33.5681 33.1676 36.8001 29.1836 36.8001ZM10.8156 14.0001C8.15961 14.0001 5.99961 16.1601 5.99961 18.8161V29.5841C5.99961 32.2401 8.15961 34.4001 10.8156 34.4001H29.1836C31.8396 34.4001 33.9996 32.2401 33.9996 29.5841V28.8801H32.1596C29.7436 28.8801 27.6956 27.0881 27.5036 24.7841C27.3756 23.4721 27.8556 22.1761 28.8156 21.2321C29.6476 20.3841 30.7676 19.9201 31.9676 19.9201H33.9996V18.8161C33.9996 16.1601 31.8396 14.0001 29.1836 14.0001H10.8156Z" fill="white" />
                <path d="M4.79961 21.4561C4.14361 21.4561 3.59961 20.9121 3.59961 20.2561V12.9442C3.59961 10.5602 5.10361 8.40011 7.32761 7.55211L20.0316 2.75211C21.3436 2.25611 22.7996 2.43218 23.9356 3.23218C25.0876 4.03218 25.7596 5.32817 25.7596 6.72017V12.8002C25.7596 13.4562 25.2156 14.0002 24.5596 14.0002C23.9036 14.0002 23.3596 13.4562 23.3596 12.8002V6.72017C23.3596 6.11217 23.0716 5.55215 22.5596 5.20015C22.0476 4.84815 21.4396 4.76815 20.8636 4.99215L8.15961 9.79214C6.86361 10.2881 5.98361 11.5522 5.98361 12.9442V20.2561C5.99961 20.9281 5.45561 21.4561 4.79961 21.4561Z" fill="white" />
                <path d="M32.1607 28.8799C29.7447 28.8799 27.6967 27.0879 27.5047 24.7839C27.3767 23.4559 27.8567 22.1599 28.8167 21.2159C29.6327 20.3839 30.7527 19.9199 31.9527 19.9199H35.2807C36.8647 19.9679 38.0807 21.2159 38.0807 22.7519V26.0479C38.0807 27.5839 36.8647 28.8319 35.3287 28.8799H32.1607ZM35.2487 22.3199H31.9687C31.4087 22.3199 30.8967 22.5279 30.5287 22.9119C30.0647 23.3599 29.8407 23.9679 29.9047 24.5759C30.0007 25.6319 31.0087 26.4799 32.1607 26.4799H35.2967C35.5047 26.4799 35.6967 26.2879 35.6967 26.0479V22.7519C35.6967 22.5119 35.5047 22.3359 35.2487 22.3199Z" fill="white" />
                <path d="M23.1998 20.7999H11.9998C11.3438 20.7999 10.7998 20.2559 10.7998 19.5999C10.7998 18.9439 11.3438 18.3999 11.9998 18.3999H23.1998C23.8558 18.3999 24.3998 18.9439 24.3998 19.5999C24.3998 20.2559 23.8558 20.7999 23.1998 20.7999Z" fill="white" />
              </svg>

            </div>
            {/* Amount */}
            <div className="text-[2.4rem] font-semibold">₹500</div>
            {/* Recharge Button */}
            <Link href={'mywallet/addmoney'}>
              <button className="border-2 border-[#10B9EA] text-[1.6rem] font-medium rounded-lg px-3 py-1">
                Recharge
              </button>
            </Link>
          </div>
        </div>

        <div className="h-full w-full py-4 px-24 bg-black">
          <div className="h-full w-full bg-[#242424]">
            <div className="flex justify-between text-white items-center p-8">
              <h1 className={inter.className + " font-bold  text-[2rem]"}>Recent Transaction</h1>
              <div className="flex justify-between gap-2 items-center ">
                <button
                  type="submit"
                  className="flex justify-center items-center gap-2 border-[0.9px] text-xl border-white rounded-full font-['Poppins'] py-2 px-6 "
                >
                  <svg width="25" height="25" className="inline-block" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.6363 21.3275L14.6122 17.3034H17.6303V7.2433H14.6122L18.6363 3.21924L22.6603 7.2433H19.6423V17.3034H22.6603M2.54004 19.3155V17.3034H12.6002V19.3155M2.54004 13.2794V11.2674H9.58214V13.2794M2.54004 7.2433V5.23127H6.5641V7.2433H2.54004Z" fill="#F8F8F8" />
                  </svg>
                  {" "}
                  Sort
                </button>
                <div className="relative w-full max-w-md mx-auto">
                  <div className="flex items-center border border-white rounded-[35px] bg-transparent px-4">
                    <input
                      type="text"
                      placeholder="Search by name"
                      className="w-full py-2 bg-transparent text-white placeholder-white outline-none"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6 text-white ml-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-4.35-4.35M5.5 11a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0z"
                      />
                    </svg>
                  </div>
                </div>

              </div>
            </div>
            <div className="text-white">
              <DataTable
                columns={columns}
                className={montserrat.className}
                data={rowData}
                pagination
                customStyles={customStyles}
                theme="solarized"
              />

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
