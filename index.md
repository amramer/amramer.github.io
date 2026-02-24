---
layout: default
title: "Home"
---

<div class="hero">
  <img src="{{ site.logo | relative_url }}" alt="Profile photo of Amr Amer" class="hero-avatar">
  <div class="hero-text">
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

# ⭐ Featured Projects

---

## 🎓 Master’s Thesis  
### Personality-Aware Non-verbal Behavior Generation in Dyadic Interactions

- Transformer + VQ-VAE generative architecture  
- Generates **listener avatars (face + upper body)** conditioned on personality traits  
- Evaluated using **Fréchet Distance (FD)**, **Paired FD (P-FD)**, and user studies  
- User study achieved **86% personality trait recognition accuracy**

<p align="center">
  <img src="{{ '/assets/final-avatars.gif' | relative_url }}" width="78%" alt="Generated avatars">
</p>

**Live Demo:**  
[Thesis website](https://master-thesis-amr-amer.streamlit.app/)

**Repository:**  
[Github repo.](https://github.com/amramer/Personality-Aware-Non-verbal-Behavior-Generation)

**Tech Used:**  Python · PyTorch · Transformers · VQ-VAE · SMPL-X (PIXIE)  
OpenCV · CUDA · Librosa · SLURM / Enroot · Multi-GPU (A100) · TensorBoard

---

## 🏸 Badminton-VisionAI — AI Match Analytics from Video

Badminton-VisionAI is an end-to-end computer vision system that turns badminton match videos into structured performance analytics for coaches and players.

It tracks **both players and the shuttlecock**, analyzes shot events, projects motion onto a mini-court, and generates a downloadable **coach-style report**.

### 🎥 System Demo

<p align="center">
  <img src="{{ '/assets/tracking.gif' | relative_url }}" width="85%" alt="Badminton Tracking Video">
</p>

<p align="center">
  <img src="{{ '/assets/dashboard.gif' | relative_url }}" width="85%" alt="Badminton Dashboard">
</p>


*(Upper: Player + shuttle tracking + Shot Detection + Court Mapping.  
Lower: Final analytics Streamlit dashboard ( Players Statistics, Shot analysis, and Coach Report)*

Generated coach report example:

<p align="center">
  <img src="{{ '/assets/coach-report.png' | relative_url }}" width="70%" alt="Coach Report Example">
</p>


### Why This Project Is Interesting

Badminton tracking is a challenging domain for computer vision:

- Shuttlecock is extremely small and fast   
- Players frequently occlude each other   
- Rapid direction changes break naive trackers   

This project combines detection, tracking, geometry, and temporal analytics to produce **coach-readable insights**, not just raw detections.

### Key Features

- Stable multi-object player tracking  
- Shuttlecock trajectory tracking with speed estimation  
- Shot type detection with temporal stabilization  
- Mini-court projection using homography  
- Interactive analytics dashboard for match analysis  
- Downloadable coach report with movement & shot statistics  

### Tech Used

Python · OpenCV · YOLO · Multi-Object Tracking  
Court Homography & Projection · Shot Event Detection  
Plotly Analytics · ReportLab PDF Export  


### Demo & Links

- 🎥 Demo Video: *(add link)*  
- 💻 Repository: *(add GitHub repo link)*  
- 📄 Sample Coach Report: *(optional)*

### My Contribution

I designed and implemented the system end-to-end:

- Built the tracking pipeline and court projection logic  
- Implemented shot detection with label stabilization  
- Developed the analytics dashboard and coach report export  
- Structured the project as modular components for experimentation and reuse  

This project reflects my interest in **real-world computer vision systems** that connect model outputs to actionable insights.

---

# 🧠 Other Projects

---

## 🩺 Medical Imaging — Computer Vision

### 3D Brain Tumor Segmentation (MRI)

Multi-label **3D semantic segmentation** of glioma sub-regions from volumetric MRI scans.

- **Dataset:** Medical Decathlon / BraTS (multi-modal MRI)  
- **Model:** 3D SegResNet (MONAI)  
- **Input Modalities:** FLAIR · T1 · T1Gd · T2  
- **Target Structures:** Whole Tumor (**WT**), Tumor Core (**TC**), Enhancing Tumor (**ET**)  
- **Training & Evaluation:** Dice Loss and Mean Dice  
- **Results:** **Mean Dice = 0.78** on validation (WT: **0.90**, TC: **0.82**, ET: **0.59**)  
- **Pipeline:** preprocessing → training → inference → deployment & visualization 

<p align="center">
  <img src="{{ '/assets/visualize-dec-dataset.gif' | relative_url }}" width="78%" alt="Brain tumor segmentation">
</p>

**Repository:**  
[Github repo.](https://github.com/amramer/brain-tumor-segmentation-3D-DeepLearning)

**Tech Used:**  PyTorch · MONAI · 3D SegResNet · Multi-modal MRI  
3D Medical Image Transforms · Sliding Window Inference · Experiment Tracking (W&B)

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
- **Pipeline:** data preparation → training → evaluation → deployment & visualization  

<p align="center">
  <img src="{{ '/assets/final_segmentation.gif' | relative_url }}" width="78%" alt="Autonomous driving segmentation results">
</p>


**Repository:**  
[Github repo.](https://github.com/amramer/Semantic-Segmentation-Model-for-Autonomous-Vehicles-An-End-to-End-ML-Workflow)

**Tech Used:**  PyTorch · Fastai · Semantic Segmentation · Hyperparameter Optimization · Experiment Tracking

---

## 🎙️ Conversational AI — Voice Assistant (Ongoing)
### AI Conversational Agent with Voice, Avatar, and Web Interface

Conversational AI system enabling real-time voice and text interaction through a custom web-based interface.

- Speech-to-text and text-to-speech for natural dialogue

- LLM-powered conversational reasoning

- Human-like conversational avatar integrated into the UI

- Modular frontend–backend design for extensibility

<p align="center">
  <img src="{{ '/assets/AI-conversationa-assistant.png' | relative_url }}" width="82%" alt="AI Conversational Agent Web-interface">
</p>

**Tech Used:** Python · OpenAI GPT · Speech-to-Text · Text-to-Speech · HTML · CSS · JavaScript · Bootstrap · jQuery

**Status:** 🚧 Ongoing

---

## Vision–Language Models  
### Realtime Vision Captioning

Exploratory project focused on applying **vision–language models in realtime webcam-based settings**.

- Realtime image captioning and visual question answering using **BLIP** via **Hugging Face Transformers**  
- Image classification using **ResNet-50** pretrained on **ImageNet**  
- Realtime **Gradio-based webcam application** for live image captioning and classification with adjustable inference parameters  

The project is implemented as a set of Jupyter notebooks, progressing from offline image understanding to **a realtime vision application**.

<p align="center">
  <img src="{{ '/assets/realtime-app.gif' | relative_url }}" width="85%" alt="realtime vision capitioning">
</p>

**Repository:**  
[Github repo.](https://github.com/amramer/realtime-vision-captioning)

**Tech Used:**  
Python · PyTorch · Torchvision · Hugging Face Transformers · Gradio · PIL · NumPy


---

## 🧠 Technical Profile

| Area | Skills & Tools |
|----|----|
| **Computer Vision Tasks** | Object Detection · Segmentation · Tracking · Video Motion Analysis · Digital Avatar Generation |
| **Models & Frameworks** | PyTorch · Tensorflow · OpenCV · YOLO · SAM · CNNs · Vision Transformers (ViT) · TrackNet · Supervision|
| **Training & Evaluation** | Transfer Learning · Fine-tuning · Loss Design · Metric Selection · Hyperparameter Optimization · Multi-GPU Training (CUDA) |
| **Data & Experimentation** | Dataset Preparation · Data Augmentation · Efficient Data Loading · Weights & Biases · TensorBoard · Ablation Studies |
| **Deployment & Inference** | Docker · GPU Inference Pipelines · Batch & Real-time Inference · AWS (EC2 GPU) · Streamlit (Demos) |
| **Compute & Infrastructure** | SLURM (HPC) · GPU Job Scheduling · Multi-node Training · Large-scale GPU Experiments |
| **Software Engineering Foundations** | Python · C++. Object-Oriented Design · Version Control (Git) · Debugging · Logging · Unit Testing |




---

## 🎥 Beyond Work

Outside of my professional work, I enjoy aerial photography and videography using drones.
This section highlights selected visual projects created in my free time.

<p align="center">
  <iframe width="45%"
    src="https://player.vimeo.com/video/1152190588"
    frameborder="0" allowfullscreen></iframe>

  <iframe width="45%"
    src="https://player.vimeo.com/video/1152190476"
    frameborder="0" allowfullscreen></iframe>

  <iframe width="45%"
    src="https://player.vimeo.com/video/1152190673"
    frameborder="0" allowfullscreen></iframe>
</p>

<p align="center">
  <a href="https://vimeo.com/amramer252805454" target="_blank">
    View more Drone videos on Vimeo →
  </a>
</p>


## 📬 Contact

If you're hiring or would like to collaborate:

**Email:** amribrahim.amer@gmail.com  
**LinkedIn:** https://www.linkedin.com/in/amr-amer-2023-cs/
