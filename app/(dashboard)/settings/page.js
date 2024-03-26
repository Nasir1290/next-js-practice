
import Button from "@/app/components/button";
import Link from "next/link";

export const metadata = {
    title: "Settings",
    description: "this is the Settings Page",
};

export default function page() {
    return (
        <div>
            <Link className=" bg-red-500" href={"#targeted"}>
                Go to your targeted Div
            </Link>
            <h1 className="text-3xl">Hello world</h1>
            <div className="mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet possimus odit repudiandae sed pariatur natus autem, accusamus rerum recusandae cum illum veritatis porro est earum dolorem nobis. Excepturi, maiores?
            </div>
            <div className="mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet possimus odit repudiandae sed pariatur natus autem, accusamus rerum recusandae cum illum veritatis porro est earum dolorem nobis. Excepturi, maiores?
            </div>
            <div className="mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet possimus odit repudiandae sed pariatur natus autem, accusamus rerum recusandae cum illum veritatis porro est earum dolorem nobis. Excepturi, maiores?
            </div>
            <div className="mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet possimus odit repudiandae sed pariatur natus autem, accusamus rerum recusandae cum illum veritatis porro est earum dolorem nobis. Excepturi, maiores?
            </div>
            <div className="mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet possimus odit repudiandae sed pariatur natus autem, accusamus rerum recusandae cum illum veritatis porro est earum dolorem nobis. Excepturi, maiores?
            </div>
            <div className="mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet possimus odit repudiandae sed pariatur natus autem, accusamus rerum recusandae cum illum veritatis porro est earum dolorem nobis. Excepturi, maiores?
            </div>
            <div className="mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet possimus odit repudiandae sed pariatur natus autem, accusamus rerum recusandae cum illum veritatis porro est earum dolorem nobis. Excepturi, maiores?
            </div>
            <div className="mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet possimus odit repudiandae sed pariatur natus autem, accusamus rerum recusandae cum illum veritatis porro est earum dolorem nobis. Excepturi, maiores?
            </div>
            <div className="mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet possimus odit repudiandae sed pariatur natus autem, accusamus rerum recusandae cum illum veritatis porro est earum dolorem nobis. Excepturi, maiores?
            </div>
            <div className="mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet possimus odit repudiandae sed pariatur natus autem, accusamus rerum recusandae cum illum veritatis porro est earum dolorem nobis. Excepturi, maiores?
            </div>
            <div className="mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet possimus odit repudiandae sed pariatur natus autem, accusamus rerum recusandae cum illum veritatis porro est earum dolorem nobis. Excepturi, maiores?
            </div>
            <div className="mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet possimus odit repudiandae sed pariatur natus autem, accusamus rerum recusandae cum illum veritatis porro est earum dolorem nobis. Excepturi, maiores?
            </div>
            <div className="mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet possimus odit repudiandae sed pariatur natus autem, accusamus rerum recusandae cum illum veritatis porro est earum dolorem nobis. Excepturi, maiores?
            </div>
            <Button className="m-10" path={"/dashboard"}>
                Go to dashboard Page
            </Button>
            <span id="targeted"></span>
        </div>
    )
}
