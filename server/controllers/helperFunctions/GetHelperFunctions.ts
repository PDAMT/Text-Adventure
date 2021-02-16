class GetHelperFunctionsBlueprint {
  getAllPlayers(): string {
    return `SELECT * FROM users`;
  }
  getRoomPrompt(id: string): string {
    console.log("room prompt: ", id)
    return `SELECT prompt FROM prompts WHERE prompts.room_id = ${id}`;
  }
  getPlayer(id: string): string {
    return `SELECT * FROM users WHERE users.id = ${id}`;
  }
  getAnswer(id: string): string {
    return `SELECT answer FROM rooms WHERE rooms.id = ${id}`;
  }
  getHint(id: string): string {
    return `SELECT hint FROM hints WHERE hints.room_id = ${id}`;
  }
}
const GetHelperFunctions = new GetHelperFunctionsBlueprint;

const getRoomPrompt = GetHelperFunctions.getRoomPrompt;
const getPlayer = GetHelperFunctions.getPlayer;
const getAllPlayers = GetHelperFunctions.getAllPlayers;
const getAnswer = GetHelperFunctions.getAnswer;
const getHint = GetHelperFunctions.getHint;

export {
  getRoomPrompt,
  getPlayer,
  getAllPlayers,
  getAnswer,
  getHint
};

export default GetHelperFunctions;