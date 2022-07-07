import { render, screen } from "@testing-library/react";
import React from "react";
import fetch from 'jest-fetch-mock';
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Dashboard ,{ getServerSideProps }from "../../pages/dashboard";


const posts = [
  {
    "author": "Alejandro Escamilla",
    "download_url": "https://picsum.photos/id/1/5616/3744",
    "height": 3744,
    "id": "1",
    "url": "https://unsplash.com/photos/LNRyGwIJr5c",
    "width": 5616,
  },
  {
    "author": "Paul Jarvis",
    "download_url": "https://picsum.photos/id/10/2500/1667",
    "height": 1667,
    "id": "10",
    "url": "https://unsplash.com/photos/6J--NXulQCs",
    "width": 2500,
  },
  {
    "author": "Tina Rataj",
    "download_url": "https://picsum.photos/id/100/2500/1656",
    "height": 1656,
    "id": "100",
    "url": "https://unsplash.com/photos/pwaaqfoMibI",
    "width": 2500,
  },
  {
    "author": "Lukas Budimaier",
    "download_url": "https://picsum.photos/id/1000/5626/3635",
    "height": 3635,
    "id": "1000",
    "url": "https://unsplash.com/photos/6cY-FvMlmkQ",
    "width": 5626,
  },
  {
    "author": "Danielle MacInnes",
    "download_url": "https://picsum.photos/id/1001/5616/3744",
    "height": 3744,
    "id": "1001",
    "url": "https://unsplash.com/photos/1DkWWN1dr-s",
    "width": 5616,
  },
]

describe("App", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("handles errors on dog refresh", () => {
    render(
      <BrowserRouter>
        <Dashboard posts={posts} />
      </BrowserRouter>
    );
    expect(screen.getByAltText("Picture of the author")).toBeInTheDocument();
  });

  it("should call picsum api", async () => {
    fetch.mockResponseOnce(
      JSON.stringify(posts)
    );
    const response = await getServerSideProps();
    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: posts
        }
      })
    );
  });
});
