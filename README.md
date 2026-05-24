# Cara Core MKT Releases

Repositório de releases da loja do Cara Core MKT.

## Escopo

Este repositório foi limpo para manter foco exclusivo no produto Cara Core MKT.
Aqui ficam apenas a vitrine web, a documentação, o wiki e os artefatos de
download do MKT.

## O que tem neste repositório

- `docs/`: loja web do produto
- `docs/index.html`: página principal da vitrine
- `docs/readme.html`: documentação da loja
- `docs/wiki/`: wiki do Cara Core MKT dentro da loja
- `docs/artefato-vitrine-gratuito.html`: página oficial do artefato
- `docs/downloads/`: downloads oficiais do produto

## Artefato oficial da loja

- `docs/downloads/caracore-mkt-python-source-2026-04-06.zip`

Este ZIP contém o código-fonte Python do produto Cara Core MKT para consulta
técnica, entendimento do artefato e publicação de release.

## Produto da loja

O produto apresentado é o Cara Core MKT: automação operacional de marketing
com oficina em Python, vitrine web, documentação e wiki de apoio.

## Observação

Conteúdos que não pertencem ao escopo da loja do MKT foram removidos deste
repositório para evitar ambiguidade.

Cara Core Informática · Cara Core MKT
## Publicacao de versao em Releases

Use o workflow `.github/workflows/publish-mkt-release.yml` para publicar versoes dos scripts MKT no GitHub Releases.

Passos:

1. Suba o ZIP novo em `docs/downloads/`.
2. Rode o workflow manualmente (`workflow_dispatch`).
3. Informe:
   - `tag`: formato `vX.Y.Z` (ex: `v1.0.0`)
   - `zip_path`: caminho do ZIP no repo
   - `release_name`: titulo da release
   - `prerelease`: `true` ou `false`
4. O workflow valida tag/arquivo, cria a tag e publica a release com o ZIP.
