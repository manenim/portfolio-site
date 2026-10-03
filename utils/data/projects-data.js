export const projectsData = [
  {
    "id": 1,
    "name": "Distributed Task Orchestrator",
    "description": "Built a Go task orchestration system with gRPC streaming, explicit task states, retries, timeouts, cancellation, and worker-disconnection handling.",
    "tools": [
      "Go",
      "gRPC",
      "PostgreSQL",
      "Redis"
    ],
    "role": "Backend Engineer",
    "code": "https://github.com/manenim/task-orchestrator",
    "demo": "",
    "image": "",
    "type": "BE"
  },
  {
    "id": 2,
    "name": "Distributed Rate Limiter",
    "description": "Built a Go token-bucket rate limiter with atomic Redis/Lua refill and deduction, in-memory support, context cancellation, and fail-open/fail-closed policies.",
    "tools": [
      "Go",
      "Redis",
      "Lua"
    ],
    "role": "Backend Engineer",
    "code": "https://github.com/manenim/gateway-rate-limiter",
    "demo": "https://pkg.go.dev/github.com/manenim/gateway-rate-limiter",
    "image": "",
    "type": "BE"
  },
  {
    "id": 3,
    "name": "Multi-Tenant SaaS Backend",
    "description": "Built a tenant-aware backend with schema-per-tenant persistence, authentication, RBAC, billing workflows, and background processing.",
    "tools": [
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "BullMQ"
    ],
    "role": "Backend Engineer",
    "code": "https://github.com/manenim/nestjs-saas-platform",
    "demo": "",
    "image": "",
    "type": "BE"
  },
  {
    "id": 4,
    "name": "AI-Powered PR Review Agent",
    "description": "Built a PR review agent with validated GitHub webhooks, background processing, persisted review history, and schema-validated LLM findings posted as inline comments.",
    "tools": [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "LangChain"
    ],
    "role": "Backend Engineer",
    "code": "https://github.com/manenim/pr-review-agent",
    "demo": "",
    "image": "",
    "type": "BE"
  }
];
