class GetHelperFunctionsBlueprint {
  getAllPlayers(): string {
    return `SELECT * FROM users`;
  }
  getRoomPrompt(id: string): string {
    return `SELECT ${id} FROM prompts`;
  }
  getPlayer(id: string): string {
    return `SELECT ${id} FROM users`;
  }
}
const GetHelperFunctions = new GetHelperFunctionsBlueprint;

const getRoomPrompt = GetHelperFunctions.getRoomPrompt;
const getPlayer = GetHelperFunctions.getPlayer;
const getAllPlayers = GetHelperFunctions.getAllPlayers;
export {
  getRoomPrompt,
  getPlayer,
  getAllPlayers,
}

export default GetHelperFunctions;