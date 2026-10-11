# Amr Amer: Portfolio

Source of my portfolio website: **[amramer.github.io](https://amramer.github.io)**

Machine Learning Engineer with an M.Sc. in Visual Computing from Saarland University and experience at DFKI, focused on computer vision, multimodal generative models, data pipelines and MLOps.

## Projects on the site

| Project | What it is | Links |
|---|---|---|
| **Master's thesis**: Personality-Aware Non-verbal Behavior Generation | Transformer + VQ-VAE model that generates personality-aware listener avatars in dyadic conversations | [Website](https://amramer.github.io/Personality-Aware-Non-verbal-Behavior-Generation/), [Repo](https://github.com/amramer/Personality-Aware-Non-verbal-Behavior-Generation) |
| **Badminton-VisionAI** | End-to-end computer vision pipeline that turns match videos into player and shot analytics | [Pipeline video](https://www.youtube.com/watch?v=dAe9e_1AGuA), [Dashboard video](https://www.youtube.com/watch?v=Bc2JLifgjzI), [Repo](https://github.com/amramer/Badminton-visionAI), [Live demo](https://badminton-visionai-web.onrender.com/) (free tier, about a minute to wake up) |
| **AV Sensor DataOps** | Versioned, quality-checked data pipeline from raw AV sensor logs to a monitored camera + LiDAR 3D detection API (DVC, Airflow, MLflow, CI/CD) | [Repo](https://github.com/amramer/av-sensor-dataops) |
| **Semantic Segmentation for Autonomous Vehicles** | Multi-class segmentation on BDD100K | [Repo](https://github.com/amramer/Semantic-Segmentation-Model-for-Autonomous-Vehicles-An-End-to-End-ML-Workflow) |
| **3D Brain Tumor Segmentation (MRI)** | Multi-label 3D segmentation of glioma sub-regions with MONAI | [Repo](https://github.com/amramer/brain-tumor-segmentation-3D-DeepLearning) |
| **Realtime Vision Captioning** | Webcam captioning and classification with BLIP and ResNet-50 | [Repo](https://github.com/amramer/realtime-vision-captioning) |
| **AI Conversational Agent** (ongoing) | Voice and text assistant with an avatar and web interface | |

## How the site is built

A single static page with no framework and no build step, served by GitHub Pages (`.nojekyll` turns off Jekyll).

```
index.html            All page content
assets/css/style.css  Styles, light and dark theme
assets/js/main.js     Theme switch, videos that play only while visible
assets/media/         Project videos (MP4, converted from GIFs)
assets/img/           Posters, screenshots, profile photo (WebP)
assets/fonts/         Self-hosted IBM Plex fonts
assets/Resume_Amr_Amer.pdf
```

To add a project, copy one `<article class="project">` (featured) or `<article class="card">` (other projects) block in `index.html` and edit its text. To add a video, convert the GIF to a small MP4 plus a poster frame:

```bash
ffmpeg -i demo.gif -movflags +faststart -pix_fmt yuv420p -an \
  -vf "scale='min(1280,iw)':-2,scale=trunc(iw/2)*2:trunc(ih/2)*2" -crf 24 assets/media/demo.mp4
ffmpeg -ss 2 -i demo.gif -frames:v 1 assets/img/demo-poster.webp
```

Preview locally with `python3 -m http.server` and open http://localhost:8000.

## Contact

[Email](mailto:amribrahim.amer@gmail.com) | [LinkedIn](https://www.linkedin.com/in/amr-amer-2023-cs/) | [GitHub](https://github.com/amramer)
