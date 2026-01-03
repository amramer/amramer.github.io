---
layout: default
title: "Home"
---

<div class="hero">
  <img src="{{ site.logo | relative_url }}" alt="Profile photo of Amr Amer" class="hero-avatar">
  <div class="hero-text">
    <h1>Hi, I'm <strong>Amr Amer</strong></h1>
    <h3>Machine Learning Engineer | Computer Vision | Multimodal Generative Models</h3>

    <p>
      I design and build <strong>end-to-end machine learning systems</strong> with a focus on
      <strong>computer vision</strong>, <strong>medical imaging</strong>, and
      <strong>multimodal generative models</strong>.
      <br>
      Currently seeking roles in <strong>Machine Learning Engineering</strong> and
      <strong>Computer Vision</strong>.
    </p>

    <p>
      <a href="mailto:amribrahim.amer@gmail.com">Email</a> ·
      <a href="https://www.linkedin.com/in/amr-amer-2023-cs/">LinkedIn</a> ·
      <a href="https://github.com/amramer">GitHub</a>
    </p>
  </div>
</div>

---

## 👨‍💻 What I Do

- Design and train deep learning models for real-world computer vision problems  
- Build <strong>end-to-end ML pipelines</strong>: data → training → evaluation → deployment & visualization  
- Optimize models through <strong>systematic experimentation</strong> and hyperparameter tuning  
- Develop interactive demos and dashboards for analysis and presentation  
 

---

## 🔥 Featured Project — Master's Thesis

### Personality-Aware Non-verbal Behavior Generation in Dyadic Interactions

- Transformer + VQ-VAE generative architecture
- Generates listener avatar (face + upper body) conditioned on personality traits
- Evaluated using Fréchet Distance (FD), Paired FD (P-FD), and user studies
- User study achieved **86% personality trait recognition accuracy**

<p align="center">
  <img src="{{ '/assets/final-avatars.gif' | relative_url }}" width="75%" alt="Generated avatars">
</p>

**Live Demo:**  
https://master-thesis-amr-amer.streamlit.app/

**Repository:**  
https://github.com/amramer/Personality-Aware-Non-verbal-Behavior-Generation

**Tech Used:** Python · PyTorch · Transformers · VQ-VAE · SMPL-X (PIXIE)
OpenCV · CUDA  · Librosa · Slurm/Enroot · Multi-GPU (A100) · TensorBoard

---

# 3D Brain Tumor Segmentation (MRI)

Multi-label **3D semantic segmentation** of glioma sub-regions from volumetric MRI scans.

- **Dataset:** Medical Decathlon / BraTS (multi-modal MRI)
- **Model:** 3D SegResNet (MONAI)
- **Input Modalities:** FLAIR · T1 · T1Gd · T2
- **Target Structures:** Whole Tumor (**WT**), Tumor Core (**TC**), Enhancing Tumor (**ET**)
- **Training & Evaluation:** Dice Loss and Mean Dice
- **Results:** **Mean Dice = 0.78** on validation  
  (WT: **0.90**, TC: **0.82**, ET: **0.59**)
- **Pipeline:** preprocessing → training → inference → visualization

<p align="center">
  <img src="media/visualize-dec-dataset.gif" width="75%" alt="Brain tumor segmentation">
</p>

**Repository:**  
https://github.com/amramer/brain-tumor-segmentation-3D-DeepLearning

**Tech Used:**  PyTorch · MONAI · 3D SegResNet · Multi-modal MRI  
3D Medical Image Transforms · Sliding Window Inference · Experiment Tracking with W&B

---

## 🚗 Computer Vision — Autonomous Driving

### Semantic Segmentation for Autonomous Vehicles

End-to-end **semantic segmentation** of urban street scenes for autonomous driving perception.

- **Dataset:** BDD100K
- **Task:** Multi-class semantic segmentation
- **Classes:** Road, Traffic Light, Traffic Sign, Vehicle, Person, Bicycle, Background
- **Evaluation:** mean Intersection over Union (**mIoU**)
- **Results:** Achieved **mIoU ≈ 0.45**, with strong performance on dominant classes  
  (Road: ~0.88, Vehicle: ~0.78)
- **Optimization:** Systematic **hyperparameter optimization** via experiment sweeps
- **Pipeline:** data preparation → training → evaluation → visualization

<p align="center">
  <img src="https://github.com/amramer/Semantic-Segmentation-Model-for-Autonomous-Vehicles-An-End-to-End-ML-Workflow/blob/main/media/final_segmentation.gif?raw=true"
       width="75%" alt="Autonomous driving segmentation results">
</p>

**Repository:**  
https://github.com/amramer/Semantic-Segmentation-Model-for-Autonomous-Vehicles-An-End-to-End-ML-Workflow

**Tech Used:**  PyTorch · Fastai · Semantic Segmentation · Hyperparameter Optimization · Experiment Tracking


---

## 🏸 Sports Analytics — Computer Vision

### Badminton Shot Type Classification & Player Tracking

- Ongoing project focused on **real-time sports analytics**
- Multi-object tracking of players and shuttlecock
- Shot type classification using **Roboflow + Supervision**
- Emphasis on **temporal consistency**, tracking robustness, and visualization
- Interactive analytics dashboard for performance analysis

<!--
Repository (to be published):
https://github.com/amramer/badminton-ai-tracking
-->

**Tech:** OpenCV · YOLO · Supervision · Streamlit

---

## 🧠 Tech Stack

| Category | Tools |
|--------|------|
| ML & CV | PyTorch, MONAI, OpenCV, Roboflow, Transformers |
| Experimentation | Weights & Biases, Hyperparameter Sweeps |
| Deployment | Streamlit, Docker, CUDA, SLURM (HPC) |
| Data | Python, Pandas, NumPy, Multi-GPU Training |
| Domains | Medical Imaging, Autonomous Driving, Sports Analytics, Generative Models |

<!--
---

## 📄 Resume

For a detailed overview of my experience, technical skills, and projects:

**[Download Resume (PDF)]({{ '/assets/Amr_Amer_Resume.pdf' | relative_url }})**

---
-->


## 📬 Contact

If you're hiring or would like to collaborate:

**Email:** amribrahim.amer@gmail.com  
**LinkedIn:** https://www.linkedin.com/in/amr-amer-2023-cs/
