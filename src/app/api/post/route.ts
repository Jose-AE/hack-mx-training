import ConnectMongoDB from "@/libs/mongodb";
import Post from "@/models/postModel";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  //connect to DB
  await ConnectMongoDB();

  //get all posts
  const posts = await Post.find();

  //respond
  return NextResponse.json({ posts }, { status: 200 });
}

export async function POST(request: NextRequest) {
  //get req data
  const { age, author, body, title } = await request.json();

  //connect to DB
  await ConnectMongoDB();

  //create post document in DB
  await Post.create({ age, author, body, comments: [], title });

  // Respond
  return NextResponse.json(
    { message: "Post created successfully" },
    { status: 201 }
  );
}

export async function DELETE(request: NextRequest) {
  //get req data
  const id = request.nextUrl.searchParams.get("id"); ///localhost/api/post?id=123

  //connect to DB
  await ConnectMongoDB();

  //create post document in DB
  await Post.findByIdAndDelete(id);

  // Respond
  return NextResponse.json(
    { message: "Post deleted successfully" },
    { status: 201 }
  );
}
