const CardItem = [
{
  id: 1,
  title: "Personal Site",
  image: "/images/home.png",
  description: "The CV website you are viewing now, rebuilt with React and Vite with modern UI patterns and cleaner performance.",
  category: "Code",
  tags: ["React", "Vite", "CSS", "UX"],
  link: "https://github.com/j-rrukaj/Personal-Website"

},
{
  id: 6,
  title: "AWS EKS Platform",
  image: "/images/platform-eks.svg",
  description: "Built an EKS platform with Terraform split into `bootstrap`, `infra` and `k8s-app` stacks so Kubernetes resources can be managed and destroyed cleanly without cross-provider teardown issues.",
  category: "Platform",
  tags: ["Terraform", "EKS", "AWS", "Platform Engineering"],
  link: "https://github.com/j-rrukaj/aws-eks"
},
{
  id: 7,
  title: "GitOps and Shared Ingress",
  image: "/images/platform-gitops.svg",
  description: "Configured ArgoCD applications to manage platform resources from Git and exposed the website, ArgoCD and Prometheus through a shared public ALB using grouped ingress rules and Route53 records.",
  category: "Platform",
  tags: ["ArgoCD", "GitOps", "ALB Ingress", "Route53"],
  link: "https://github.com/j-rrukaj/aws-eks"
},
{
  id: 8,
  title: "GitHub Actions OIDC Pipeline",
  image: "/images/platform-pipeline.svg",
  description: "Set up GitHub Actions workflows with AWS OIDC federation so plans and applies can run without long-lived credentials, including change detection, stack-aware execution order and environment approval support.",
  category: "Platform",
  tags: ["GitHub Actions", "OIDC", "CI/CD", "Automation"],
  link: "https://github.com/j-rrukaj/aws-eks"
},
{
  id: 9,
  title: "Observability and Autoscaling",
  image: "/images/platform-observability.svg",
  description: "Added kube-prometheus-stack, kube-state-metrics, HPA, pod disruption budgets, topology spread constraints and Cluster Autoscaler IRSA wiring to improve resilience, visibility and workload scaling behaviour.",
  category: "Platform",
  tags: ["Prometheus", "Autoscaling", "IRSA", "Kubernetes"],
  link: "https://github.com/j-rrukaj/aws-eks"
},

{
  id: 2,
  title: "Rocket-X",
  image: "/images/rocket-x.png",
  description: "This was one of the fist websites I created. This is a basic HTML and CSS website.",
  category: "Code",
  tags: ["HTML", "CSS"],
  link: "https://github.com/j-rrukaj/Rocket-X"
},

{
  id: 3,
  title: "Rollin Dice",
  image: "/images/Dicegame.png",
  description: "Rollin Dice uses Javascript as well as HTML and CSS. Experimented with Math.Floor and Math.random to randomly generate a number from 1 - 6.",
  category: "Code",
  tags: ["JavaScript", "HTML", "CSS"],
  link: "https://github.com/j-rrukaj/Rollin-Dice-Game"
},

{
  id: 4,
  title: "Simon Game",
  image: "/images/simongame.png",
  description: "Popular game which the idea is to copy the randomly generated colours following the sequence each level adds another colour to the sequence. This game uses IF/Else statements, arrays and functions which are executed each time a colour button is pressed.",
  category: "Code",
  tags: ["JavaScript", "Game", "Frontend"],
  link: "https://github.com/j-rrukaj/Simon-Game"
},

{
  id: 5,
  title: "To Do List",
  image: "/images/todolist.png",
  description: "This website was created using Node.js Express, EJS, Body-parser. Essentially body-parser would tap in to the user input, then store items in an array. EJS was used to embed JS In different components.",
  category: "Code",
  tags: ["Node.js", "Express", "EJS"],
  link: "https://github.com/j-rrukaj/To-Do-List"

 
},


];

export default CardItem
