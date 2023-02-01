import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SolanaEscrow } from "../target/types/solana_escrow";

describe("solana-escrow", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.SolanaEscrow as Program<SolanaEscrow>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});