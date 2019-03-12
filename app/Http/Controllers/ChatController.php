<?php

namespace App\Http\Controllers;
use App\Message;
// use App\Events\MessageSent;
use Redis;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function index()
    {
        return auth()
            ->user()
            ->messages()
            ->where(function ($query) {
                $query->bySender(request()->input('sender_id'))
                    ->byReceiver(auth()->user()->id);
            })
            ->orWhere(function ($query) {
                $query->bySender(auth()->user()->id)
                    ->byReceiver(request()->input('sender_id'));
            })
            ->get();
    }
    public function getMessages()//get messages
    {
        $messages = Message::all();

        return response()->json($messages,200);
    }
    public function sendMessage(Request $request)//send messages
    {
        $data = $request->only(['name','body']);
        $message = Message::create($data);

        $redis = Redis::connection();
        $redis->publish('message',json_encode($message));
        
        return response()->json($message,200);
    }

    public function store(Request $request)
    {
        $message = Message::create([
            'sender_id'   => $request->input('sender_id') ? $request->input('sender_id') : auth()
            ->user()->id,
            'receiver_id' => $request->input('receiver_id'),
            'message'     => $request->input('message'),
        ]);

        $redis = Redis::connection();
        $redis->publish('message',json_encode($message));
        // broadcast(new MessageSent($message));
        // return response()->json($message,200);

        return $message->fresh();
    }
}
