---
layout: default
title: "Home"
---

<div class="layout-with-sidebar">
  <aside class="sidebar">
    <div class="sidebar-profile">
      <img src="{{ site.logo | relative_url }}" alt="Profile photo of Amr Amer" class="sidebar-avatar">
      <h1 class="sidebar-name">Amr Amer</h1>
      <p class="sidebar-title">ML Engineer · CV · Generative Models</p>
    </div>

    <nav class="sidebar-nav">
      <a href="#home">Home</a>
      <a href="#featured-project">Featured Project</a>
      <a href="#medical-imaging">Medical Imaging</a>
      <a href="#sports-analytics">Sports Analytics</a>
      <a href="#tech-stack">Tech Stack</a>
      <a href="#contact">Contact</a>
    </nav>

    <div class="sidebar-links">
      <a href="mailto:amribrahim.amer@gmail.com">Email</a>
      <a href="https://www.linkedin.com/in/amr-amer-2023-cs/">LinkedIn</a>
      <a href="https://github.com/amramer">GitHub</a>
    </div>
  </aside>

  <main class="content-with-sidebar" markdown="1">

# <span id="home"></span>👋 Hi, I'm **Amr Amer**
### Machine Learning Engineer | Computer Vision | Multimodal Generative Models

I design and build **real-time CV systems**, **medical imaging solutions**, and **multimodal generative models**.  
Currently open to roles in **ML Engineering, Computer Vision, and Deep Learning**.

[Email](mailto:amribrahim.amer@gmail.com) • 
[LinkedIn](https://www.linkedin.com/in/amr-amer-2023-cs/) • 
[GitHub](https://github.com/amramer)

---

## 🔥 Featured Project — Master's Thesis {#featured-project}

**Personality-Aware Non-verbal Behavior Generation in Dyadic Interactions**

- **Transformer + VQ-VAE** generative architecture  
- Generates listener avatar (face + upper body) conditioned on **personality**
- Evaluated with metrics **FID, P-FID**, and user studies (86% trait recognition)

<p align="center">
  <img src="assets/final-avatars.gif" width="75%">
</p>

**Live Demo:** [Thesis Website](https://master-thesis-amr-amer.streamlit.app/)  
**Repository:** [Thesis Codebase](https://github.com/amramer/Personality-Aware-Non-verbal-Behavior-Generation)
 
---

## 🩺 Key Project — Medical Imaging {#medical-imaging}

### 3D Brain Tumor Segmentation (MRI)
- Dataset: **Medical Decathlon / BraTS**
- Model: **3D SegResNet (MONAI)**
- Loss & Metrics: **Dice Loss**, **Mean Dice**
- Modalities: FLAIR · T1 · T1Gd · T2

<p align="center">
  <img src="assets/visualize-dec-dataset.gif" width="75%">
</p>

**Repository:** [Brain Tumor Segmentation (3D Deep Learning)](https://github.com/amramer/brain-tumor-segmentation-3D-DeepLearning)  
**Tech:** MONAI · PyTorch · CUDA

---

## 🏸 Sports Analytics — Computer Vision {#sports-analytics}

### Badminton Shot Type Classification & Player Tracking
- Shot detection with **Roboflow + Supervision**
- Real-time tracking (players + shuttle)
- Visualization dashboard with analytics

<!--
**Repo:** https://github.com/amramer/badminton-ai-tracking  
-->
**Tech:** OpenCV · YOLO · Supervision · Streamlit

---

## 🧠 Tech Stack {#tech-stack}

| Category | Tools |
|----------|--------|
| ML & CV | PyTorch, MONAI, OpenCV, Roboflow, Transformers |
| Deployment | Streamlit, Docker, CUDA, SLURM (HPC) |
| Data | Python, Pandas, NumPy, Dataloading, Multi-GPU Training |
| Domains | Medical Imaging, Sports Tracking, Generative Models, Multimodal AI |

---

<!--
## 📄 Resume

[Download My Resume (PDF)](assets/resume.pdf)

-->

## 📬 Contact {#contact}

If you're hiring or would like to collaborate:

**Email:** amribrahim.amer@gmail.com  
**LinkedIn:** https://www.linkedin.com/in/amr-amer-2023-cs/

---

  </main>
</div>
