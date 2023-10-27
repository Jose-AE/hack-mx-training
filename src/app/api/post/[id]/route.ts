import ConnectMongoDB from "@/libs/mongodb";
import Post from "@/models/postModel";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { id } = params;

  //connect to DB
  await ConnectMongoDB();

  //get post document
  const post = await Post.findById(id);

  return NextResponse.json(
    {
      post,
    },
    { status: 200 }
  );
}
