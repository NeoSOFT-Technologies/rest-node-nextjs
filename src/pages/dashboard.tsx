import React, { useEffect } from "react";
import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
import { useSession, signIn, signOut } from "next-auth/react"
export default function Dashboard({ posts }: { posts: any }) {
 
  
 
  return (
    <>
      <Container className="p-3">
        <Row>
          {posts.map((post: any) => {
            return (
              <Col md="4" sm="12" key={post.id}>
                <div>
                  <h6 data-testid="author-name">{post.author}</h6>
                  <Image
                    src={post.download_url}
                    alt="Picture of the author"
                    width={300}
                    height={300}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
export async function getServerSideProps() {
  const response = await fetch("https://picsum.photos/v2/list");
  const data = await response.json();
  const res = data.slice(1, 6);
  return {
    props: {
      posts: res,
    },
  };
}
