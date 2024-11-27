nix-shell -p yarn --run 'cd Front_end && yarn install && export export NODE_OPTIONS=--openssl-legacy-provider && PORT=33333 yarn start'
