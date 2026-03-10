---
layout: default
title: "Home"
---

<style>
  /* Two-column layout */
  body {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }

  /* TOC container */
  .toc-container {
    position: fixed;
    left: 0;
    top: 0;
    width: 250px;
    height: 100vh;
    overflow-y: auto;
    background: #f8f9fa;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    z-index: 100;
  }

  /* TOC styling */
  .toc {
    list-style: none;
    padding: 0;
  }

  .toc ul {
    padding-left: 0;
  }

  .toc li {
    margin-bottom: 8px;
  }

  .toc a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    font-size: 0.9em;
  }

  .toc a:hover {
    color: #007bff;
  }

  /* Main content area */
  .main-content {
    margin-left: 270px;
    width: calc(100% - 270px);
    padding: 20px;
  }

  /* Smooth scrolling for anchor links */
  html {
    scroll-behavior: smooth;
  }

  /* Your existing styles */
  .hero {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }

  .hero-avatar {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin-right: 2rem;
  }

  .hero-text h3 {
    margin-top: 0;
    font-size: 1.5rem;
  }

  /* Section styling */
  section {
    margin-bottom: 3rem;
  }

  /* Center images and iframes */
  p.center {
    text-align: center;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  iframe {
    max-width: 100%;
  }
</style>

<div class="toc-container">
  <div class="toc">
    <h4>Table of Contents</h4>
    <ul>
      <li><a href="#what-i-do">What I Do</a></li>
      <li><a href="#featured-projects">Featured Projects</a></li>
      <li><a href="#masters-thesis">Master’s Thesis</a></li>
      <li><a href="#badminton-visionai">Badminton-VisionAI</a></li>
      <li><a href="#autonomous-driving">Autonomous Driving</a></li>
      <li><a href="#medical-imaging">Medical Imaging</a></li>
      <li><a href="#vision-language-models">Vision–Language Models</a></li>
      <li><a href="#conversational-ai">Conversational AI</a></li>
      <li><a href="#technical-profile">Technical Profile</a></li>
      <li><a href="#beyond-work">Beyond Work</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</div>

<div class="main-content">
  <div class="hero">
    <img src="{{ site.logo | relative_url }}" alt="Profile photo of Amr Amer" class="hero-avatar">
    <div class="hero-text">
      <h3>Machine Learning Engineer | Computer Vision | Multimodal Generative Models</h3>
      <p>
        Machine Learning Engineer with a <strong>Master’s in Visual Computing from Saarland University</strong> and
        research experience at <strong>DFKI (German Research Center for Artificial Intelligence)</strong>.
        I design and build <strong>end-to-end machine learning systems</strong> for real-world applications in
        <strong>computer vision</strong>, <strong>medical imaging</strong>, and
        <strong>multimodal generative models</strong>.
      </p>
      <p>
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

  <section id="what-i-do">
    ## 👨‍💻 What I Do
    - Design and train deep learning models for real-world computer vision problems
    - Build **end-to-end ML pipelines**: data → training → evaluation → deployment & visualization
    - Optimize models through **systematic experimentation** and hyperparameter tuning
    - Develop interactive demos and dashboards for analysis and presentation
  </section>

  <section id="featured-projects">
    # ⭐ Featured Projects
  </section>

  <section id="masters-thesis">
    ## 🎓 Master’s Thesis
    ### Personality-Aware Non-verbal Behavior Generation in Dyadic Interactions

    Generative model for generating **realistic listener avatars in dyadic conversations**, conditioned on **personality traits**.

    The model predicts **facial expressions, head motion, and upper-body gestures** of a listener from the speaker’s **audio and motion signals**.

    <p class="center">
      <img src="{{ '/assets/final-avatars.gif' | relative_url }}" width="78%" alt="Generated avatars">
    </p>

    <p class="center">• • •</p>

    ### Problem

    Human conversations rely heavily on **non-verbal cues** such as facial expressions, eye gaze, and body movement.
    Most prior work does not model how these behaviors vary with **personality traits**.

    <p class="center">• • •</p>

    ### Approach

    Developed a **multimodal generative architecture** combining:

    - **Transformer encoder** for temporal modeling
    - **VQ-VAE** for quantized motion representation learning
    - **SMPL-X body parameters** for realistic face and upper-body avatar generation
    - Integration of **audio, facial motion, and body gesture signals**

    The model generates **personality-aware listener behavior sequences** in response to a speaker.

    <p class="center">• • •</p>

    ### Results

    Quantitative evaluation:

    - **Face:** FID **6.15**, P-FID **10.31**
    - **Upper Body:** FID **43.16**, P-FID **87.73**

    User study:

    - Participants correctly identified **extroverted vs introverted avatars in 86% of cases**
    - **71% preference** for the personality-aware model over the personality-agnostic baseline

    <p class="center">• • •</p>

    ### Tech Stack

    PyTorch · Transformers · VQ-VAE · SMPL-X (PIXIE)
    Librosa · OpenCV · CUDA · TensorBoard
    SLURM · Enroot · Multi-GPU Training (A100)

    ### Links

    🌐 **Website**
    [Thesis Demo Website](https://master-thesis-amr-amer.streamlit.app/)

    💻 **Repository**
    [GitHub Repository](https://github.com/amramer/Personality-Aware-Non-verbal-Behavior-Generation)
  </section>

  <section id="badminton-visionai">
    ## 🏸 Badminton-VisionAI — AI Match Analytics from Video

    Badminton-VisionAI is an **end-to-end computer vision pipeline** that converts badminton match videos into structured performance analytics for players and coaches.

    The system tracks **both players and the shuttlecock**, detects shot events, projects motion onto a **mini-court representation**, and generates a downloadable **coach-style performance report**.

    <p class="center">• • •</p>

    ### 🎥 System Demo

    <p class="center">
      <b>Tracking & On-Court Intelligence</b><br/>
      <sub>Player tracking • Shuttle tracking • Shot detection • Court mapping</sub>
    </p>

    <p class="center">
      <img src="{{ '/assets/badminton-visionAI_01.gif' | relative_url }}"
           alt="Badminton tracking: players, shuttle, shots, and court mapping"
           style="max-width: 92%; object-fit: contain; border-radius: 12px;" />
    </p>

    <br/>

    <p class="center">
      <b>Analytics Dashboard (Streamlit)</b><br/>
      <sub>Player statistics • Heatmaps • Shot analysis • Coach-ready report</sub>
    </p>

    <p class="center">
      <img src="{{ '/assets/badminton-visionAI_02.gif' | relative_url }}"
           alt="Streamlit analytics dashboard for badminton tracking"
           style="max-width: 92%; object-fit: contain; border-radius: 12px;" />
    </p>

    <p class="center">• • •</p>

    ### Technical Challenges

    Badminton tracking presents several challenges for computer vision systems:

    - **Extremely small and fast shuttlecock**
    - **Frequent player occlusions**
    - **Rapid direction changes that break naive trackers**

    This project combines **object detection, multi-object tracking, geometric projection, and temporal analytics** to produce **coach-readable match insights**, not just raw detections.

    <p class="center">• • •</p>

    ### Key Features

    - Stable **multi-object player tracking**
    - **Shuttlecock trajectory tracking** with speed estimation
    - **Shot type classification** with temporal stabilization
    - **Mini-court projection** using homography
    - **Interactive analytics dashboard** for match analysis
    - **Automated coach report** with movement and shot statistics

    <p class="center">• • •</p>

    ### Tech Stack

    **Computer Vision:** Python · OpenCV · YOLO · Multi-Object Tracking
    **Geometry & Tracking:** Court Homography · Trajectory Projection
    **Event Analysis:** Shot Detection · Temporal Label Stabilization
    **Visualization:** Streamlit · Plotly
    **Reporting:** ReportLab PDF Export

    <p class="center">• • •</p>

    ### Demo & Links

    - 🌐 **Live Demo (Streamlit App)**
      [Badminton-VisionAI Live Demo](https://badminton-visionai-web.onrender.com/)

    - 💻 **Source Code Repository**
      [GitHub Repository – Badminton-VisionAI](https://github.com/amramer/Badminton-visionAI)

    - 🎥 **Pipeline Demo – Player Tracking & Shot Analysis**
      [Watch the System Pipeline Video](https://www.youtube.com/watch?v=dAe9e_1AGuA)

    - 📊 **Analytics Dashboard Demo – Match Insights & Heatmaps**
      [Watch the Analytics Dashboard Video](https://www.youtube.com/watch?v=Bc2JLifgjzI)

    <p class="center">• • •</p>

    This project reflects my interest in **real-world computer vision systems that transform model outputs into actionable insights.**
  </section>

  <section id="autonomous-driving">
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

    <p class="center">
      <img src="{{ '/assets/final_segmentation.gif' | relative_url }}" width="78%" alt="Autonomous driving segmentation results">
    </p>

    **Repository:**
    [Github repo.](https://github.com/amramer/Semantic-Segmentation-Model-for-Autonomous-Vehicles-An-End-to-End-ML-Workflow)

    **Tech Used:** PyTorch · Fastai · Semantic Segmentation · Hyperparameter Optimization · Experiment Tracking
  </section>

  <section id="medical-imaging">
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

    <p class="center">
      <img src="{{ '/assets/visualize-dec-dataset.gif' | relative_url }}" width="78%" alt="Brain tumor segmentation">
    </p>

    **Repository:**
    [Github repo.](https://github.com/amramer/brain-tumor-segmentation-3D-DeepLearning)

    **Tech Used:** PyTorch · MONAI · 3D SegResNet · Multi-modal MRI
    3D Medical Image Transforms · Sliding Window Inference · Experiment Tracking (W&B)
  </section>

  <section id="vision-language-models">
    ## 🎙️ Vision–Language Models
    ### Realtime Vision Captioning

    Exploratory project focused on applying **vision–language models in realtime webcam-based settings**.

    - Realtime image captioning and visual question answering using **BLIP** via **Hugging Face Transformers**
    - Image classification using **ResNet-50** pretrained on **ImageNet**
    - Realtime **Gradio-based webcam application** for live image captioning and classification with adjustable inference parameters

    The project is implemented as a set of Jupyter notebooks, progressing from offline image understanding to **a realtime vision application**.

    <p class="center">
      <img src="{{ '/assets/realtime-app.gif' | relative_url }}" width="85%" alt="realtime vision capitioning">
    </p>

    **Repository:**
    [Github repo.](https://github.com/amramer/realtime-vision-captioning)

    **Tech Used:**
    Python · PyTorch · Torchvision · Hugging Face Transformers · Gradio · PIL · NumPy
  </section>

  <section id="conversational-ai">
    ## 🧠 Conversational AI — Voice Assistant (Ongoing)
    ### AI Conversational Agent with Voice, Avatar, and Web Interface

    Conversational AI system enabling real-time voice and text interaction through a custom web-based interface.

    - Speech-to-text and text-to-speech for natural dialogue
    - LLM-powered conversational reasoning
    - Human-like conversational avatar integrated into the UI
    - Modular frontend–backend design for extensibility

    <p class="center">
      <img src="{{ '/assets/AI-conversationa-assistant.png' | relative_url }}" width="82%" alt="AI Conversational Agent Web-interface">
    </p>

    **Tech Used:** Python · OpenAI GPT · Speech-to-Text · Text-to-Speech · HTML · CSS · JavaScript · Bootstrap · jQuery

    **Status:** 🚧 Ongoing
  </section>

  <section id="technical-profile">
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
  </section>

  <section id="beyond-work">
    ## 🎥 Beyond Work

    Outside of my professional work, I enjoy aerial photography and videography using drones.
    This section highlights selected visual projects created in my free time.

    <p class="center">
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

    <p class="center">
      <a href="https://vimeo.com/amramer252805454" target="_blank">
        View more Drone videos on Vimeo →
      </a>
    </p>
  </section>

  <section id="contact">
    ## 📬 Contact

    If you're hiring or would like to collaborate:

    **Email:** amribrahim.amer@gmail.com
    **LinkedIn:** [https://www.linkedin.com/in/amr-amer-2023-cs/](https://www.linkedin.com/in/amr-amer-2023-cs/)
  </section>
</div>
