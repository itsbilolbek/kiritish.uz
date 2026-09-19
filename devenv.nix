{ config, pkgs, ... }:
{
  languages.javascript = {
    enable = true;
    corepack.enable = true;
    package = pkgs.nodejs_24;
  };

  treefmt = {
    enable = true;
    config.programs = {
      nixfmt.enable = true;
      yamlfmt.enable = true;
      taplo.enable = true;
      prettier.enable = true;
    };
  };

  git-hooks = {
    enable = true;
    hooks = {
      treefmt.enable = true;
      prettier.enable = true;
    };
  };
}
