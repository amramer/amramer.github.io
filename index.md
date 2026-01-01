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

  <main class="content-with-sidebar">
    <section id="home">
      <h1>👋 Hi, I'm <strong>Amr Amer</strong></h1>
      <h3>Machine Learning Engineer | Computer Vision | Multimodal Generative Models</h3>

      <p>
        I design and build <strong>real-time CV systems</strong>, <strong>medical imaging solutions</strong>, 
        and <strong>multimodal generative models</strong>.<br>
        Currently open to roles in <strong>ML Engineering, Computer Vision, and Deep Learning</strong>.
      </p>

      <p>
        <a href="mailto:amribrahim.amer@gmail.com">Email</a> •
        <a href="https://www.linkedin.com/in/amr-amer-2023-cs/">LinkedIn</a> •
        <a href="https://github.com/amramer">GitHub</a>
      </p>

      <hr>
    </section>

    <section id="featured-project">
      <h2>🔥 Featured Project — Master's Thesis</h2>

      <p><strong>Personality-Aware Non-verbal Behavior Generation in Dyadic Interactions</strong></p>

      <ul>
        <li><strong>Transformer + VQ-VAE</strong> generative architecture</li>
        <li>Generates listener avatar (face + upper body) conditioned on <strong>personality</strong></li>
        <li>Evaluated with metrics <strong>FID, P-FID</strong>, and user studies (86% trait recognition)</li>
      </ul>

      <p style="text-align: center;">
        <img src="{{ '/assets/final-avatars.gif' | relative_url }}" width="75%" alt="Generated avatar samples">
      </p>

      <p>
        <strong>Live Demo:</strong>
        <a href="https://master-thesis-amr-amer.streamlit.app/">Thesis Website</a><br>
        <strong>Repository:</strong>
        <a href="https://github.com/amramer/Personality-Aware-Non-verbal-Behavior-Generation">Thesis Codebase</a>
      </p>

      <hr>
    </section>

    <section id="medical-imaging">
      <h2>🩺 Key Project — Medical Imaging</h2>

      <h3>3D Brain Tumor Segmentation (MRI)</h3>
      <ul>
        <li>Dataset: <strong>Medical Decathlon / BraTS</strong></li>
        <li>Model: <strong>3D SegResNet (MONAI)</strong></li>
        <li>Loss &amp; Metrics: <strong>Dice Loss</strong>, <strong>Mean Dice</strong></li>
        <li>Modalities: FLAIR · T1 · T1Gd · T2</li>
      </ul>

      <p style="text-align: center;">
        <img src="{{ '/assets/visualize-dec-dataset.gif' | relative_url }}" width="75%" alt="MRI segmentation visualization">
      </p>

      <p>
        <strong>Repository:</strong>
        <a href="https://github.com/amramer/brain-tumor-segmentation-3D-DeepLearning">
          Brain Tumor Segmentation (3D Deep Learning)
        </a><br>
        <strong>Tech:</strong> MONAI · PyTorch · CUDA
      </p>

      <hr>
    </section>

    <section id="sports-analytics">
      <h2>🏸 Sports Analytics — Computer Vision</h2>

      <h3>Badminton Shot Type Classification &amp; Player Tracking</h3>
      <ul>
        <li>Shot detection with <strong>Roboflow + Supervision</strong></li>
        <li>Real-time tracking (players + shuttle)</li>
        <li>Visualization dashboard with analytics</li>
      </ul>

      <!--
      <p>
        <strong>Repo:</strong> https://github.com/amramer/badminton-ai-tracking
      </p>
      -->

      <p>
        <strong>Tech:</strong> OpenCV · YOLO · Supervision · Streamlit
      </p>

      <hr>
    </section>

    <section id="tech-stack">
      <h2>🧠 Tech Stack</h2>

      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ML &amp; CV</td>
            <td>PyTorch, MONAI, OpenCV, Roboflow, Transformers</td>
          </tr>
          <tr>
            <td>Deployment</td>
            <td>Streamlit, Docker, CUDA, SLURM (HPC)</td>
          </tr>
          <tr>
            <td>Data</td>
            <td>Python, Pandas, NumPy, Dataloading, Multi-GPU Training</td>
          </tr>
          <tr>
            <td>Domains</td>
            <td>Medical Imaging, Sports Tracking, Generative Models, Multimodal AI</td>
          </tr>
        </tbody>
      </table>

      <hr>
    </section>

    <!--
    <section id="resume">
      <h2>📄 Resume</h2>
      <p>
        <a href="{{ '/assets/resume.pdf' | relative_url }}">Download My Resume (PDF)</a>
      </p>
      <hr>
    </section>
    -->

    <section id="contact">
      <h2>📬 Contact</h2>

      <p>If you're hiring or would like to collaborate:</p>

      <p><strong>Email:</strong> <a href="mailto:amribrahim.amer@gmail.com">amribrahim.amer@gmail.com</a></p>
      <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/amr-amer-2023-cs/">https://www.linkedin.com/in/amr-amer-2023-cs/</a></p>

      <hr>
    </section>
  </main>
</div>
