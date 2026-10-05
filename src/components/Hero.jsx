import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import videoSrc from "../assets/intro-video.mp4";
import playIcon from "../assets/play.svg";
import pauseIcon from "../assets/pause.svg";
import "./Hero.css";

const Hero = () => {
	const videoRef = useRef(null);
	const [playing, setPlaying] = useState(false);
	const [roleIndex, setRoleIndex] = useState(0);
	const roles = ["Frontend Developer", "MERN Stack Developer", "Software Developer", "AI Enthusiast", "Computer Science Student"];

	useEffect(() => {
		const interval = window.setInterval(() => setRoleIndex((current) => (current + 1) % roles.length), 3200);
		return () => window.clearInterval(interval);
	}, [roles.length]);

	useEffect(() => {
		const v = videoRef.current;
		if (!v) return;

		const onEnded = () => {
	 		v.pause();
	 		v.currentTime = 0;
	 		setPlaying(false);
	 	};

		v.addEventListener("ended", onEnded);
		return () => v.removeEventListener("ended", onEnded);
	}, []);

	const handleToggle = async () => {
		const v = videoRef.current;
		if (!v) return;
		if (v.paused || v.ended) {
			// if ended, reset to start then play
			if (v.ended) v.currentTime = 0;
			try { await v.play(); setPlaying(true); } catch { /* autoplay blocked */ }
		} else {
			v.pause();
			setPlaying(false);
		}
	};

	return (
		<section className="hero" aria-label="Hero section">
			<div className="hero-video-container" aria-hidden="true">
				<video
					ref={videoRef}
					src={videoSrc}
					playsInline
					preload="metadata"
					tabIndex={-1}
					className="hero-video"
				/>
			</div>

			<motion.div className="hero-inner" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.14 } } }}>
				<motion.p className="hero-eyebrow" variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>Creative developer / 2025</motion.p>
				<motion.h1 variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>MAIDA SYED</motion.h1>
				<motion.div className="hero-role" aria-live="polite" variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
					<AnimatePresence mode="wait">
						<motion.span key={roles[roleIndex]} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }}>{roles[roleIndex]}</motion.span>
					</AnimatePresence>
				</motion.div>
				<motion.p className="hero-description" variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>I design and build thoughtful digital experiences where technology meets visual clarity.</motion.p>
				<motion.a className="hero-cta" href="#projects" variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>Explore my work <span>↘</span></motion.a>
			</motion.div>

			<div className="video-controls-overlay" role="group" aria-label="Video controls">
				<button className="icon-btn black toggle" onClick={handleToggle} aria-label={playing ? "Pause video" : "Play video"}>
					<img src={playing ? pauseIcon : playIcon} alt={playing ? "Pause" : "Play"} />
				</button>
			</div>
		</section>
	);
};

export default Hero;
