import { Suspense } from "react";

interface ProjectProps {
  params: {
    id: string;
  };
}

export interface ProjectData {
  id: number;
  name: string;
  executionDate: string;
  description: string[] | null;
  projectBanner: string[] | null;
  projectStack: string[] | null;
  principalStack: string;
  projectUrl: string;
  active: boolean;
}

export default async function Project({ params }: ProjectProps) {
  const { id } = params;

  const res = await fetch(`http://localhost:5000/api/projects/${id}`, {
    next: {
      revalidate: 240,
    },
    cache: "no-store",
  });

  if (!res.ok) return <p>Erro ao buscar o projeto</p>;

  const project = (await res.json()) as ProjectData | null;

  if (!project) return <p>Projeto nao encontrado</p>;

  return (
    <main>
      <h1>Projeto</h1>
      {JSON.stringify(project, null, 2)}
      <div>
        <Suspense fallback={<p>Carregando dados do projeto...</p>}>
          <h2>{project.name}</h2>
        </Suspense>
      </div>
    </main>
  );
}
