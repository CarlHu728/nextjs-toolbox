import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <main>
        <Header title="color picture" />

        <img src="/img.jpg" alt="色图"></img>

        <audio controls autoplay loop>
          <source src="/music.flac" type="audio/flac" />
          Your browser does not support the audio tag.
        </audio>

      </main>
      <Footer />
    </div>
  );
}
