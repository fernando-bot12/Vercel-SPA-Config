import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CalendarIcon, Clock, Users } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import interiorImage from "@assets/stock_images/modern_restaurant_in_f3ea70ed.jpg";

const sucursales = [
  {
    id: "granjas",
    name: "Sucursal Granjas",
    address: "Avenida Central, entre calle Décima y Onceava",
    phone: "528994676569", // WhatsApp preferido para reservación
    hours: { start: 20, end: 2 }, // 8 PM a 2 AM
    timeSlots: ["20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30", "00:00", "00:30", "01:00", "01:30"]
  },
  {
    id: "cumbres",
    name: "Sucursal Cumbres",
    address: "Poniente 1, esquina con Calle 1",
    phone: "528991557828",
    hours: { start: 15, end: 0 }, // 3 PM a 12 AM
    timeSlots: ["15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"]
  },
  {
    id: "torres",
    name: "Sucursal Torres",
    address: "Ampliación Tamaulipas, Av. Reynosa #1311",
    phone: "528991555564",
    hours: { start: 15, end: 0 }, // 3 PM a 12 AM
    timeSlots: ["15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"]
  }
];

const formSchema = z.object({
  sucursal: z.string({
    required_error: "Por favor selecciona una sucursal.",
  }),
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Correo electrónico inválido."),
  phone: z.string().min(10, "El teléfono debe tener al menos 10 dígitos."),
  date: z.date({
    required_error: "Por favor selecciona una fecha.",
  }),
  time: z.string({
    required_error: "Por favor selecciona una hora.",
  }),
  guests: z.string({
    required_error: "Selecciona el número de personas.",
  }),
  location: z.string({
    required_error: "Selecciona el área de preferencia.",
  }),
  payment: z.string({
    required_error: "Selecciona el método de pago.",
  }),
  comments: z.string().optional(),
});

export default function Reservations() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sucursal: "",
      name: "",
      email: "",
      phone: "",
      comments: "",
    },
  });

  const selectedSucursalId = form.watch("sucursal");
  const selectedSucursal = sucursales.find(s => s.id === selectedSucursalId);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const sucursal = sucursales.find(s => s.id === values.sucursal);
    console.log("Selected Sucursal for WhatsApp:", sucursal);
    
    if (!sucursal) {
      toast({
        title: "Error",
        description: "No se pudo encontrar la sucursal seleccionada.",
        variant: "destructive",
      });
      return;
    }

    const message = `Hola ${sucursal.name}! Me gustaría hacer una reservación:\n\n*Nombre:* ${values.name}\n*Fecha:* ${format(values.date, "PPP", { locale: es })}\n*Hora:* ${values.time}\n*Personas:* ${values.guests}\n*Área:* ${values.location}\n*Pago:* ${values.payment}\n*Teléfono:* ${values.phone}\n*Email:* ${values.email}${values.comments ? `\n*Comentarios:* ${values.comments}` : ""}`;
    
    const whatsappUrl = `https://wa.me/${sucursal.phone}?text=${encodeURIComponent(message)}`;
    
    // Explicitly using a temporary anchor for better cross-browser compatibility
    const link = document.createElement("a");
    link.href = whatsappUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "¡Redirigiendo a WhatsApp!",
      description: `Enviando reservación a ${sucursal.name}.`,
      className: "bg-primary text-black border-none",
    });
    form.reset();
  }

  return (
    <section id="reservations" className="py-24 relative overflow-hidden flex items-center justify-center min-h-screen">
       {/* Background */}
       <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: `url(${interiorImage})`,
          filter: "brightness(0.25) blur(2px)"
        }}
      />

      <div className="container relative z-10 px-4 max-w-4xl mx-auto">
        <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase mb-2">
              Reserva tu <span className="text-primary">Mesa</span>
            </h2>
            <p className="text-gray-400">Selecciona tu sucursal favorita.</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="sucursal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white uppercase font-bold text-xs tracking-wide">Sucursal</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-primary/50">
                            <SelectValue placeholder="Selecciona sucursal" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-zinc-900 border-white/10 text-white">
                          {sucursales.map((s) => (
                            <SelectItem key={s.id} value={s.id}>
                              {s.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white uppercase font-bold text-xs tracking-wide">Hora</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                        disabled={!selectedSucursalId}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-primary/50">
                            <SelectValue placeholder={selectedSucursalId ? "Selecciona hora" : "Primero elige sucursal"} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-zinc-900 border-white/10 text-white h-48">
                          {selectedSucursal?.timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white uppercase font-bold text-xs tracking-wide">Nombre Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" {...field} className="bg-white/5 border-white/10 text-white focus:border-primary/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white uppercase font-bold text-xs tracking-wide">Teléfono</FormLabel>
                      <FormControl>
                        <Input placeholder="55 1234 5678" {...field} className="bg-white/5 border-white/10 text-white focus:border-primary/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white uppercase font-bold text-xs tracking-wide">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="correo@ejemplo.com" {...field} className="bg-white/5 border-white/10 text-white focus:border-primary/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="guests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white uppercase font-bold text-xs tracking-wide">Personas</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-primary/50">
                            <SelectValue placeholder="Número de personas" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-zinc-900 border-white/10 text-white">
                          {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "Persona" : "Personas"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-white uppercase font-bold text-xs tracking-wide">Fecha</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP", { locale: es })
                              ) : (
                                <span>Selecciona una fecha</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-zinc-900 border-white/10 text-white" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                            className="bg-zinc-900 text-white rounded-md border border-white/10"
                            classNames={{
                              day_selected: "bg-primary text-black hover:bg-primary hover:text-black focus:bg-primary focus:text-black",
                              day_today: "bg-white/10 text-white",
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white uppercase font-bold text-xs tracking-wide">Área de preferencia</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-primary/50">
                            <SelectValue placeholder="Selecciona área" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-zinc-900 border-white/10 text-white">
                          <SelectItem value="terraza">Terraza</SelectItem>
                          <SelectItem value="interior">Interior</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="payment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white uppercase font-bold text-xs tracking-wide">Método de pago</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-primary/50">
                            <SelectValue placeholder="Selecciona método" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-zinc-900 border-white/10 text-white">
                          <SelectItem value="efectivo">Efectivo</SelectItem>
                          <SelectItem value="tarjeta">Tarjeta</SelectItem>
                          <SelectItem value="transferencia">Transferencia</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="comments"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white uppercase font-bold text-xs tracking-wide">Comentarios Especiales (Opcional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Alergias, ocasión especial, etc." 
                        className="resize-none bg-white/5 border-white/10 text-white focus:border-primary/50" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-black font-bold uppercase tracking-wider h-12 text-lg transition-transform hover:scale-[1.01]"
                >
                  Confirmar Reservación
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
