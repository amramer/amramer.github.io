---
layout: default
title: "Home"
---

<div class="hero">
  <img src="{{ site.logo | relative_url }}" alt="Profile photo of Amr Amer" class="hero-avatar">
  <div class="hero-text">
    <h1>👋 Hi, I'm <strong>Amr Amer</strong></h1>
    <h3>Machine Learning Engineer | Computer Vision | Multimodal Generative Models</h3>

    <p>
      I design and build <strong>real-time CV systems</strong>, <strong>medical imaging solutions</strong>,
      and <strong>multimodal generative models</strong>.<br>
      Currently open to roles in <strong>ML Engineering, Computer Vision, and Deep Learning</strong>.
    </p>

    <p>
      <a href="mailto:amribrahim.amer@gmail.com">Email</a> ·
      <a href="https://www.linkedin.com/in/amr-amer-2023-cs/">LinkedIn</a> ·
      <a href="https://github.com/amramer">GitHub</a>
    </p>
  </div>
</div>

---

## 🔥 Featured Project — Master's Thesis

**Personality-Aware Non-verbal Behavior Generation in Dyadic Interactions**

- **Transformer + VQ-VAE** generative architecture  
- Generates listener avatar (face + upper body) conditioned on **personality**
- Evaluated with metrics **FID, P-FID**, and user studies (86% trait recognition)

<p align="center">
  <img src="{{ '/assets/final-avatars.gif' | relative_url }}" width="75%">
</p>

**Live Demo:** [Thesis Website](https://master-thesis-amr-amer.streamlit.app/)  
**Repository:** [Thesis Codebase](https://github.com/amramer/Personality-Aware-Non-verbal-Behavior-Generation)
 
---

## 🩺 Key Project — Medical Imaging

### 3D Brain Tumor Segmentation (MRI)
- Dataset: **Medical Decathlon / BraTS**
- Model: **3D SegResNet (MONAI)**
- Loss & Metrics: **Dice Loss**, **Mean Dice**
- Modalities: FLAIR · T1 · T1Gd · T2

<p align="center">
  <img src="{{ '/assets/visualize-dec-dataset.gif' | relative_url }}" width="75%">
</p>

**Repository:** [Brain Tumor Segmentation (3D Deep Learning)](https://github.com/amramer/brain-tumor-segmentation-3D-DeepLearning)  
**Tech:** MONAI · PyTorch · CUDA

---

## 🏸 Sports Analytics — Computer Vision

### Badminton Shot Type Classification & Player Tracking
- Shot detection with **Roboflow + Supervision**
- Real-time tracking (players + shuttle)
- Visualization dashboard with analytics

<!--
**Repo:** https://github.com/amramer/badminton-ai-tracking  
-->
**Tech:** OpenCV · YOLO · Supervision · Streamlit

---

## 🧠 Tech Stack

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

## 📬 Contact

If you're hiring or would like to collaborate:

**Email:** amribrahim.amer@gmail.com  
**LinkedIn:** https://www.linkedin.com/in/amr-amer-2023-cs/

---
