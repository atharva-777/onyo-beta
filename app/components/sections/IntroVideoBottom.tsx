"use client";
import { useEffect, useRef } from "react";

const IntroVideoBottom = () => {
  const videoIframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const videoIframe = videoIframeRef.current;
    if (!videoIframe) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const iframeWindow = videoIframe.contentWindow;
          if (iframeWindow) {
            if (entry.isIntersecting) {
              iframeWindow.postMessage(
                '{"event":"command","func":"playVideo","args":""}',
                "*",
              );
            } else {
              iframeWindow.postMessage(
                '{"event":"command","func":"pauseVideo","args":""}',
                "*",
              );
            }
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(videoIframe);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="mt-28" id="intro-video">
      <div className="mx-5 h-96 rounded-2xl md:mx-10 lg:mx-56 lg:h-[500px]">
        {/* Video Section */}
        <iframe
          ref={videoIframeRef}
          width="560"
          height="315"
          className="h-full w-full rounded-3xl"
          src="https://www.youtube.com/embed/cbixo8xttdw?si=wO8F5Q5An6o3Jv4R&enablejsapi=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default IntroVideoBottom;
